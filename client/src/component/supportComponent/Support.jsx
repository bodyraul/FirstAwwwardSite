import React from 'react'
import TitreCacheSupport from '../../componentReutilisable/supportComponent/TitreCacheSupport'
import UseAnimSupport from '../../CustomHoocks/support/UseAnimSupport'
import TitreSupport from './TitreSupport'
import ContenuSupport from './ContenuSupport'

export default function Support() {
    const{divTechnologieEntreprise,titreBtn,divDesigneBrand,divManagamentStartup,btn}= UseAnimSupport();

  return (
    <div style={{fontFamily:"Libre Baskerville"}} className='supp480:h-[800px] supp768:h-[900px] supp1024:h-[1100px] supp1600:h-[1250px] w-screen h-[632px] bg-blanc flex flex-col items-center justify-center '>
        <div className='supp480:h-[648px] supp768:h-[700px] supp1024:h-[850px] supp1600:h-[950px] h-[520px] flex flex-col items-center justify-between'>
          <TitreSupport ref={titreBtn} refDeux={btn} />
          <TitreCacheSupport ref={divDesigneBrand} nb={0}></TitreCacheSupport>         
          <TitreCacheSupport ref={divTechnologieEntreprise} nb={1}></TitreCacheSupport>
          <TitreCacheSupport ref={divManagamentStartup} nb={2}></TitreCacheSupport>
          <ContenuSupport/>
        </div>
    </div>
  )
}
