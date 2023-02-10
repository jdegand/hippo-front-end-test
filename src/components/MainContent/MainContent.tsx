import React from 'react';
import { useSectionData } from '../../hooks/useSectionData';
import ContentSection from '../ContentSection/ContentSection';

function MainContent() {
  const sections = useSectionData();

  return (
    <>
      {sections.map((section, index) => (
        <ContentSection key={index} section={section} />
      ))}
    </>
  );
}

export default MainContent;
