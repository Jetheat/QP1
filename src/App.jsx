import React from 'react';
import './App.css';
import Header from './components/header/header';
import IntroSection from './components/intro/intro';
import QuranLearningSection from './components/learning/learn';
import TajweedSection from './components/tajweed/tajweed';
import RecordResponseSection from './components/record/record';
import QuranPilotSection from './components/steps/steps';
import SubscriptionSection from './components/cta/cta';

import QuranLearningModule from './components/quranlerning/quranlearning';


function App() {
  return (
    <>
      <Header />
      <IntroSection />
      <QuranLearningSection />
      <TajweedSection />
      < RecordResponseSection />
      < QuranPilotSection />
      <SubscriptionSection />
      <QuranLearningModule />


    </>
  );
}

export default App;
