import React from 'react'
import UseAnimScrollWork from '../../CustomHoocks/work/UseAnimScrollWork.js'
import IntroWork from './IntroWork.jsx';
import ContenuWork from './ContenuWork.jsx';

export default function Work() {

    UseAnimScrollWork();

  return (
    <div className="supp480:h-[2000px] supp1024:h-[1800px]  h-[1800px] w-screen bg-orangeMarron flex items-center justify-center transform translate-x-[-5px]">
        <div className="supp860:w-[800px] supp1600:w-[1300px] w-[90%]  border-[3px] border-bleuGris h-[85%] rounded-[30px] ">
            <IntroWork/>
            <ContenuWork/>
        </div>
    </div>
  )
}
