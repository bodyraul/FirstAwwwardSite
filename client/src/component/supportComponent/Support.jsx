import React from 'react'
import TitreCacheSupport from '../../componentReutilisable/supportComponent/TitreCacheSupport'
import UseAnimSupport from '../../CustomHoocks/support/UseAnimSupport'
import TitreSupport from './TitreSupport'
import ContenuSupport from './ContenuSupport'

export default function Support() {
    const{divTechnologieEntreprise,supportBtnIntro,divDesigneBrand,divManagamentStartup}= UseAnimSupport();

  return (
    <div style={{fontFamily:"Libre Baskerville"}} className='supp480:h-[1100px] supp768:h-[1200px] supp1024:h-[1300px] supp1600:h-[1400px] w-screen h-[800px] bg-blanc flex flex-col items-center justify-around '>
        <TitreSupport ref={supportBtnIntro} />
        <TitreCacheSupport ref={divDesigneBrand} nb={0}></TitreCacheSupport>         
        <TitreCacheSupport ref={divTechnologieEntreprise} nb={1}></TitreCacheSupport>
        <TitreCacheSupport ref={divManagamentStartup} nb={2}></TitreCacheSupport>
        <ContenuSupport/>
    </div>
  )
}
