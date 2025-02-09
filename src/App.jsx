import React from 'react';
import './App.css';
import Header from './components/header/header';
import IntroSection from './components/intro/intro';
import QuranLearningSection from './components/learning/learn';
import TajweedSection from './components/tajweed/tajweed';
import RecordResponseSection from './components/record/record';
function App() {
  return (
    <>
      <Header />
      <IntroSection />
      <QuranLearningSection />
      <TajweedSection />
      < RecordResponseSection/>

    </>
  );
}

export default App;
