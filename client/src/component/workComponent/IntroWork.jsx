import React from 'react'
import TitreWorkComponent from '../../componentReutilisable/WorkComponent/TitreWorkComponent'
import BarreComponent from '../../componentReutilisable/WorkComponent/BarreComponent'

export default function IntroWork() {
  return (
    <div className="supp1024:h-[24%] h-[15%] w-full border-b-[3px] border-b-bleuGris flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center mb-[50px] ">
            <TitreWorkComponent>How</TitreWorkComponent>
            <BarreComponent></BarreComponent>
            <TitreWorkComponent>We</TitreWorkComponent>
            <BarreComponent></BarreComponent>
            <TitreWorkComponent>Work</TitreWorkComponent>               
        </div>
        <div  className="introText  fontDomine supp480:text-[18px] supp480:leading-[30px] supp768:text-[21px] supp768:leading-[35px] supp1024:text-[24px] supp1024:leading-[40px] supp1600:text-[28px] supp1600:leading-[45px] supp1600:px-[180px] text-[11px] leading-[20px] w-[85%] text-belge py-0 px-[10px] text-center">
            After many discussions, it's clear we need varied approaches as our network evolves.
        </div>
    </div>
  )
}
