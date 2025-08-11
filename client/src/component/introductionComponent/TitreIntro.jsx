import React from 'react'
import UseAnimTitreIntro from '../../CustomHoocks//intro/UseAnimTitreIntro'

export default function TitreIntro() {
  const {fontBasiqueUn,fontSpecialUn,textDisparitionUn,textDisparitionDeux,textDisparitionTrois,fontAleatoire}=UseAnimTitreIntro();
  return (
    <div className='supp768:h-[400px] supp1024:h-[549px] supp1600:h-[716px] w-full h-[250px] flex flex-col items-center justify-center z-[50] '>
        <p ref={fontBasiqueUn} className=" supp480:text-[20px] supp480:leading-[25px] supp768:text-[35px] supp768:leading-[45px] supp1024:text-[45px] supp1024:leading-[55px] supp1600:text-[70px] supp1600:leading-[80px] text-[16px] leading-[19px] font-[Cormorant] tracking-[2px]  text-bleuGris  ">a perspective on </p>
        <p ref={fontSpecialUn} className='supp480:text-[20px] supp480:leading-[25px] supp768:text-[35px] supp768:leading-[45px] supp1024:text-[45px] supp1024:leading-[55px] supp1600:text-[70px] supp1600:leading-[80px]  font-[Candal] font-bold  text-bleuGris px-[50px]  text-[16px] leading-[19px]  relative  overflow-hidden '>
          <span className='opacity-0 leading-[20px]' >Selection</span> 
          <span ref={textDisparitionUn} className='absolute top-0 left-[50%] transform translate-x-[-50%]  translate-y-[0%]' >Selection</span> 
          <span ref={textDisparitionDeux} className='absolute top-0 left-[50%] transform translate-x-[-50%]  translate-y-[120%]'>Cohesion</span> 
          <span ref={textDisparitionTrois} className='absolute top-0 left-[50%] transform translate-x-[-50%] translate-y-[120%]'>Connexion</span> 
        </p>
        <p ref={fontAleatoire} >
          <span className='supp480:text-[20px] supp480:leading-[25px] supp768:text-[35px] supp768:leading-[45px] supp1024:text-[45px] supp1024:leading-[55px] supp1600:text-[70px] supp1600:leading-[80px]   text-[16px] leading-[19px]font-[Cormorant]  text-bleuGris '>with a </span>
          <span className='supp480:text-[20px] supp480:leading-[25px] supp768:text-[35px] supp768:leading-[45px] supp1024:text-[45px] supp1024:leading-[55px] supp1600:text-[70px] supp1600:leading-[80px]  font-[Candal] font-bold  text-bleuGris text-[16px] leading-[19px] '>buil spirit</span> 
        </p>
    </div>
  )
}