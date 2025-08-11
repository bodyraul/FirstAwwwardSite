import React from 'react'
import Nav from '../NavComponent/Nav'
import ContenuIntro from './ContenuIntro'
import TitreIntro from './TitreIntro'
import BackgroundIntro from './BackgroundIntro'

export default function Introduction() {
    
  return (
    <div className="relative supp480:h-[522px] supp768:h-[690px] supp1024:h-[900px] supp1600:h-[1100px] bg-blancGris w-screen h-[550px] flex flex-col ">
      <Nav/>
      <TitreIntro/>
      <ContenuIntro/>
      <BackgroundIntro/>
    </div>
  )
}
