import React from 'react'
import UseAnimScrollVideo from '../../CustomHoocks/video/UseAnimScrollVideo'
import TitreVideo from './TitreVideo'
import ContenuVideo from './ContenuVideo'

export default function PartieVideo() {

const {titre,titreContenu,texteContenu}= UseAnimScrollVideo();
    
 return (
    <div  className="supp480:h-[1350px] supp768:h-[1600px] supp1024:h-[1800px] supp1600:h-[2100px] fontAbril bg-belge w-full h-[1100px] pt-[200px] ">
        <TitreVideo ref={titre} />
        <div className="supp480:h-[700px] supp480:w-[450px] supp768:w-[620px] supp768:h-[800px] supp1024:w-[700px] supp1024:h-[950px] supp1600:h-[1050px] supp1600:w-[800px]  h-[500px] w-[90%] border-[4px] border-bleuGris my-0 mx-auto rounded-[30px] ">
            <ContenuVideo  refDeux={titreContenu} refTrois={texteContenu} />
        </div>
    </div>
  )
}
