import React from 'react'
import Nav from '../NavComponent/Nav'
import ImgIntro from './ImgIntro'
import ContenuIntro from './ContenuIntro'
import TitreIntro from './TitreIntro'
import BackgroundIntro from './BackgroundIntro'

export default function Introduction() {
    
  return (
    <div className="relative supp480:h-[1200px] supp1600:h-screen bg-blancGris w-screen h-[800px]  flex flex-col">
      <Nav/>
      <ImgIntro />
      <ContenuIntro/>
      <TitreIntro />
      <BackgroundIntro/>
    </div>
  )
}
