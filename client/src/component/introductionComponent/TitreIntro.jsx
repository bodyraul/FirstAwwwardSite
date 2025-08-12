import React from 'react'
import UseAnimTitreIntro from '../../CustomHoocks//intro/UseAnimTitreIntro'
import SpanInvisible from '../../componentReutilisable/introductionComponent/SpanInvisible';
import SpanVisible from '../../componentReutilisable/introductionComponent/SpanVisible';

export default function TitreIntro() {
  const {fontBasiqueUn,fontSpecialUn,textDisparitionUn,textDisparitionDeux,textDisparitionTrois,fontAleatoire}=UseAnimTitreIntro();
  return (
    <div className='supp768:h-[400px] supp1024:h-[549px] supp1600:h-[716px] w-full h-[250px] flex flex-col items-center justify-center z-[50] '>
        <p ref={fontBasiqueUn} className=" supp480:text-[20px] supp480:leading-[25px] supp768:text-[35px] supp768:leading-[45px] supp1024:text-[45px] supp1024:leading-[55px] supp1600:text-[70px] supp1600:leading-[80px] text-[16px] leading-[19px] font-[Cormorant] tracking-[2px]  text-bleuGris transform translate-y-[-200px] opacity-0">a perspective on </p>
        <p ref={fontSpecialUn} className='supp480:text-[20px] supp480:leading-[25px] supp768:text-[35px] supp768:leading-[45px] supp1024:text-[45px] supp1024:leading-[55px] supp1600:text-[70px] supp1600:leading-[80px]  font-[Candal] font-bold  text-bleuGris px-[50px]  text-[16px] leading-[19px]  relative  overflow-hidden transform translate-y-[-200px] opacity-0'>
          <span className='opacity-0 leading-[20px]' >Selection</span> 
          <SpanInvisible ref={textDisparitionUn} nb={0} />
          <SpanInvisible ref={textDisparitionDeux} nb={1} />
          <SpanInvisible ref={textDisparitionTrois} nb={2} />
        </p>
        <p ref={fontAleatoire} className='transform translate-y-[-200px] opacity-0'>
          <SpanVisible nb={0} />
          <SpanVisible nb={1} />
        </p>
    </div>
  )
}