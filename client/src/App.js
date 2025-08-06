import React from 'react';
import Introduction from './component/introductionComponent/Introduction';
import Support from './component/supportComponent/Support';
import { Fragment } from 'react';
import Work from './component/workComponent//Work';
import PartieVideo from './component/videoComponent/PartieVideo';

function App() {
  return (
    
    <>
      <Introduction></Introduction>
      <Support></Support>
      <Work></Work>
      <PartieVideo></PartieVideo>
    </>
    
  );
}

export default App;
