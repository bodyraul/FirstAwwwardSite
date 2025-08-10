import React from 'react'
import Nav from '../NavComponent/Nav'
import ImgIntro from './ImgIntro'
import ContenuIntro from './ContenuIntro'
import TitreIntro from './TitreIntro'
import BackgroundIntro from './BackgroundIntro'

export default function Introduction() {
    
  return (
    <div className="relative supp480:h-[850px] supp768:h-[1000px] supp1024:h-[1200px] supp1600:h-[1300px] bg-blancGris w-screen h-[600px] flex flex-col ">
      <Nav/>
      <TitreIntro/>
      <ContenuIntro/>
      <BackgroundIntro/>
    </div>
  )
}
