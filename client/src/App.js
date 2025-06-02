import React from 'react';
import PartieIntroduction from './component/PartieIntroduction';
import Support from './component/Support';
import { Fragment } from 'react';
import Work from './component/Work';
import Video from './component/Video';

function App() {
  return (
    
    <>
      <PartieIntroduction></PartieIntroduction>
      <Support></Support>
      <Work></Work>
      <Video></Video>
    </>
    
  );
}

export default App;
