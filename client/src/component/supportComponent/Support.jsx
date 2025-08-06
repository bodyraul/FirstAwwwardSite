import React from 'react'
import { useRef } from 'react'
import TitreCacheSupport from '../../componentReutilisable/supportComponent/TitreCacheSupport'
import UseAnimSupport from '../../CustomHoocks/support/UseAnimSupport'
import TitreSupport from './TitreSupport'
import ContenuSupport from './ContenuSupport'

export default function Support() {
    const titreSouligneUn=useRef();
    const titreSouligneDeux=useRef();
    const titreSouligneTrois=useRef();
    const titreSouligneCacheUn=useRef();
    const titreSouligneCacheDeux=useRef();
    const titreSouligneCacheTrois=useRef();
    const allTitreSouligne =[titreSouligneUn,titreSouligneDeux,titreSouligneTrois];
    const allTitreSouligneCache =[titreSouligneCacheUn,titreSouligneCacheDeux,titreSouligneCacheTrois];
    const{divTechnologieEntreprise,supportBtnIntro,divDesigneBrand,divManagamentStartup}= UseAnimSupport();

  return (
    <div style={{fontFamily:"Libre Baskerville"}} className='supp480:h-[1100px] supp768:h-[1200px] supp1024:h-[1300px] supp1600:h-[1400px] w-screen h-[800px] bg-blanc flex flex-col items-center justify-around '>
        <TitreSupport ref={supportBtnIntro} tabUn={allTitreSouligne} tabDeux={allTitreSouligneCache} />
        <TitreCacheSupport refUne={divDesigneBrand} refDeux={titreSouligneUn} refTrois={titreSouligneCacheUn} textUn={"Creation"} textDeux="Label"  ></TitreCacheSupport>         
        <TitreCacheSupport refUne={divTechnologieEntreprise} refDeux={titreSouligneDeux} refTrois={titreSouligneCacheDeux} textUn={"Innovation "} textDeux="Business " ></TitreCacheSupport>
        <TitreCacheSupport refUne={divManagamentStartup} refDeux={titreSouligneTrois} refTrois={titreSouligneCacheTrois} textUn={"Leadership"} textDeux="Operation"  ></TitreCacheSupport>
        <ContenuSupport/>
    </div>
  )
}
