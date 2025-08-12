import React from 'react'
import UseAnimScrollWork from '../../CustomHoocks/work/UseAnimScrollWork.js'
import IntroWork from './IntroWork.jsx';
import ContenuWork from './ContenuWork.jsx';

export default function Work() {

    UseAnimScrollWork();

  return (
    <div className="supp480:h-[1450px] supp768:h-[1700px] supp1024:h-[1650px] supp1600:h-[1700px] h-[1600px] w-screen bg-orangeMarron flex items-center justify-center transform translate-x-[-5px]">
        <div className="supp480:max-w-[1100px] supp480:w-[450px] supp480:h-[1298px] supp768:h-[1500px] supp768:w-[600px] supp1024:w-[800px] supp1600:w-[1100px] h-[93%] w-[95%] max-w-[286px]  border-[3px] border-bleuGris  rounded-[30px] ">
            <IntroWork/>
            <ContenuWork/>
        </div>
    </div>
  )
}
