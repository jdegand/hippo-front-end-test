import React, { useEffect, useRef, useState } from 'react';
import './ContentSection.scss';
import classNames from 'classnames';
import { SectionData } from '../../hooks/useSectionData';

interface ContentSectionProps {
  section: SectionData;
}

function ContentSection(props: ContentSectionProps) {
  const sectionRef: any = useRef();

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const current = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      console.log('e', entries);
      observer.observe(current);
      setInView(entries[0].isIntersecting);
      if (entries[0].intersectionRatio > 0.3) {
        observer.unobserve(current);
      }
    });
    observer.observe(current);

    return () => {
      if (current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={classNames('content-section', {
        'content-section__animation': inView
      })}
    >
      <section
        className={classNames('content-section__image-section', {
          'grid-column-2': props.section.reverse,
          'align-flex-start': props.section.reverse
        })}
      >
        {props.section.first && (
          <h1
            className={classNames('content-section__h1', {
              'content-section__h1__margin': Boolean(props.section.h1),
              'padding-inline-10': Boolean(props.section.h1)
            })}
          >
            {props.section.h1}
          </h1>
        )}
        <img
          loading="lazy"
          className={classNames('content__section__image-section__img', {
            'content__section__image-section__third-img':
              !props.section.first &&
              !props.section.second &&
              !props.section.fourth
          })}
          src={props.section.image}
          alt={props.section.alt}
        />
      </section>
      <section
        className={classNames('content-section__paragraph-section', {
          'grid-column-1': props.section.reverse,
          'align-center': props.section.reverse,
          'content-section__background-1': props.section.first,
          'content-section__background-2': props.section.second,
          'content-section__background-4': props.section.fourth
        })}
      >
        {props.section.second && (
          <h1
            className={classNames('content-section__h1', {
              'margin-block-20': Boolean(props.section.h1),
              'content-section__h1__margin': Boolean(props.section.h1)
            })}
          >
            {props.section.h1}
          </h1>
        )}
        <h2
          className={classNames('content-section__h2', {
            'margin-block-50': props.section.fourth
          })}
        >
          {props.section.second ? (
            <>
              <span>
                {props.section.h2.slice(0, props.section.h2.length - 5)}
              </span>
              <span className="content-section__h2-italic">
                {' '}
                {props.section.h2.slice(-5)}
              </span>
            </>
          ) : (
            <>{props.section.h2}</>
          )}
        </h2>
        <p className="content-section__p">{props.section.p1}</p>
        {props.section.p2 && (
          <p className="content-section__p">{props.section.p2}</p>
        )}
        {props.section.p3 && (
          <p className="content-section__p content-section__p3">
            {props.section.p3}
          </p>
        )}
        {props.section.button && (
          <a className="content-section__a" href="#topic-cloud">
            Explore Our Resources
          </a>
        )}
      </section>
    </section>
  );
}

export default ContentSection;
