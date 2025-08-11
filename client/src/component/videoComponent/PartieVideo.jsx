import React from 'react'
import UseAnimScrollVideo from '../../CustomHoocks/video/UseAnimScrollVideo'
import TitreVideo from './TitreVideo'
import ContenuVideo from './ContenuVideo'

export default function PartieVideo() {

const {titre,titreContenu,texteContenu}= UseAnimScrollVideo();
    
 return (
    <div  className="supp480:h-[840px] supp480:pt-[76px] supp768:pt-[100px] supp768:h-[1090px] supp1024:h-[1240px] supp1024:pt-[125px] supp1600:h-[1440px] supp1600:pt-[150px] fontAbril bg-belge w-full h-[700px] pt-[56px] ">
        <TitreVideo ref={titre} />
        <div className="supp480:h-[468px] supp480:max-w-[650px] supp480:w-[450px] supp768:w-[500px] supp768:h-[600px] supp1024:w-[550px] supp1024:h-[650px] supp1600:h-[750px] supp1600:w-[650px]  h-[420px] max-w-[286px] w-[90%] border-[4px] border-bleuGris my-0 mx-auto rounded-[30px] ">
            <ContenuVideo  refDeux={titreContenu} refTrois={texteContenu} />
        </div>
    </div>
  )
}
