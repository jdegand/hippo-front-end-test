import React, { useState } from 'react';
import { useTopicData } from '../../hooks/useTopicData';
import classNames from 'classnames';

import './TopicCloud.scss';

function TopicCloud() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Pediatrics');

  const topics = useTopicData();

  const specialties = Array.from(
    new Set(
      topics.reduce(
        (result, topic) => result.concat(...topic.specialties),
        [] as string[]
      )
    )
  );

  const handleChange = (event: React.BaseSyntheticEvent) => {
    setSelectedSpecialty(event.target.value);
  };

  // <a> without a href -> use a button

  return (
    <section id="topic-cloud" className="topic-cloud">
      <div className="topic-cloud__topics-row">
        <h3>Browse Education Topics by Specialty:</h3>
        {specialties.map((specialty, index) => (
          <button
            type="button"
            key={index}
            onMouseEnter={handleChange}
            value={specialty}
            className={classNames('topic-cloud__topic-button', {
              'topic-cloud__selected': selectedSpecialty === specialty,
              'topic-cloud__not-selected': selectedSpecialty !== specialty
            })}
          >
            {specialty}
          </button>
        ))}
      </div>
      <ul className="topic-cloud__ul">
        {topics.map((topic, index) => (
          <li
            key={index}
            className={classNames('topic', {
              topic__selected: topic.specialties.includes(selectedSpecialty),
              topic__unselected: !topic.specialties.includes(selectedSpecialty)
            })}
          >
            {topic.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopicCloud;
