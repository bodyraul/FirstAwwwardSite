import React from 'react'
import imgStarDeux from "../../assets/images/star-Deux.png"
import welcome from "../../assets/images/welcomeDeux.png"
import vague from '../../assets/images/logoVague.png'
import UseAnimImgIntro from './../../CustomHoocks/intro/UseAnimImgIntro';

export default function ImgIntro() {
  const {containerLogo,imgStarRef}=UseAnimImgIntro()
  return (
    <>
        <img ref={containerLogo} className='supp480:size-[70px] supp768:size-[80px] supp1024:size-[90px] supp1600:size-[110px] absolute top-[130px] right-[20px] z-[8] opacity-0 transition-transform duration-300 ease-linear size-[60px] ' src={imgStarDeux} alt=" forme d'étoile marron." />
        <div  className=' absolute top-20  flex items-center justify-center h-[200px] w-[200px] z-[8]'>
            <div ref={imgStarRef} className='w-full h-full relative opacity-0 transition-all duration-300 ease-linear '>
                <img className=' supp480:w-[75px] supp768:w-[85px] supp1024:w-[95px] supp1600:w-[115px] w-[60px] absolute top-[50px] left-[10px]'  src={vague} alt="Logo orange rond ondulé." />
                <img className=' supp480:w-[95px] supp768:w-[105px] supp1024:w-[115px] supp1600:w-[135px] w-[80px] absolute top-[40px] left-[0px] rotate-[15deg] '  src={welcome} alt="un texte avec inscrit welcome"/>
            </div>
        </div>
    </>
  )
}
