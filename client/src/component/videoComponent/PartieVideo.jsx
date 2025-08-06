import React from 'react'
import UseAnimScrollVideo from '../../CustomHoocks/video/UseAnimScrollVideo'
import TitreVideo from './TitreVideo'
import ContenuVideo from './ContenuVideo'
import ImgVideo from './ImgVideo'

export default function PartieVideo() {

const {divContenu,titre,titreContenu,texteContenu,img}= UseAnimScrollVideo();
    
 return (
    <div  className=" supp768:h-[1700px] supp1024:h-[1900px] supp1600:h-[2100px] fontAbril bg-belge w-full h-[1510px] pt-[200px] ">
        <TitreVideo ref={titre} />
        <div className="supp480:h-[900px] supp768:w-[720px] supp1024:h-[1190px] supp1600:h-[1250px] supp1600:w-[900px]  h-[800px] w-[90%] border-[4px] border-bleuGris my-0 mx-auto rounded-[30px] ">
            <ContenuVideo refUne={divContenu} refDeux={titreContenu} refTrois={texteContenu} />
            <ImgVideo ref={img}/>
        </div>
    </div>
  )
}
