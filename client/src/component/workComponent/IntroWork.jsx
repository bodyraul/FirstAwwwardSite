import React from 'react'
import TitreWorkComponent from '../../componentReutilisable/WorkComponent/TitreWorkComponent'
import BarreComponent from '../../componentReutilisable/WorkComponent/BarreComponent'

export default function IntroWork() {
  return (
    <div className="supp480:h-[15%] supp768:h-[18%] supp1024:h-[24%] h-[12%] w-full border-b-[3px] border-b-bleuGris flex flex-col items-center justify-center ">
        <div className="supp768:mb-[30px] supp1024:mb-[40px] flex items-center justify-center mb-[20px] ">
            <TitreWorkComponent>How</TitreWorkComponent>
            <BarreComponent></BarreComponent>
            <TitreWorkComponent>We</TitreWorkComponent>
            <BarreComponent></BarreComponent>
            <TitreWorkComponent>Work</TitreWorkComponent>               
        </div>
        <div  className="introText  fontDomine supp480:text-[15px] supp480:leading-[25px] supp768:text-[17px] supp768:leading-[30px] supp1024:text-[20px] supp1024:leading-[35px] supp1600:text-[23px] supp1600:leading-[38px] supp1600:px-[180px] text-[12px] leading-[19px] w-[85%] text-black py-0 px-[10px] text-center">
            After many discussions, it's clear we need varied approaches as our network evolves.
        </div>
    </div>
  )
}
