import React from 'react';
import ImageGrid from './components/ImageGrid/ImageGrid';
import TopicCloud from './components/TopicCloud/TopicCloud';

import './App.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Scroller from './components/Scroller/Scroller';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="homepage">
      <header className="header-container">
        <h1 className="header-container__headline">
          Empowering the people of medicine through education and community.
        </h1>
        <a className="header-container__a" href="#topic-cloud">
          Explore Our Resources
        </a>
        <div className="header-container__scroller">
          <Scroller />
        </div>
      </header>
      <main className="page-content">
        <MainContent />
        <ImageGrid />
        <TopicCloud />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;
