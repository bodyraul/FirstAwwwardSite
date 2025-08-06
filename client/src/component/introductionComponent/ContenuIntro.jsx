import React from 'react'
import UseAnimContenuIntro from './../../CustomHoocks/intro/UseAnimContenuIntro';

export default function ContenuIntro() {
  const{informationGradient}=UseAnimContenuIntro();
  return (
    <div ref={informationGradient} style={{transition:"transform 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className='supp480:text-[17px] supp480:leading-[33px] supp480:top-[700px] supp768:text-[20px] supp768:leading-[38px] supp768:top-[780px] supp768:w-[650px] supp1024:text-[24px] supp1024:leading-[43px] supp1024:w-[800px] supp1600:text-[28px] supp1600:leading-[52px] supp1600:w-[1000px] supp1600:top-[820px] w-[80vw] h-auto top-[450px] bg-belge absolute transform rotate-[5deg] translate-x-[-50%] left-[50%]  p-[20px] text-[12px] rounded-[8px] tracking-[1px] leading-[23px] '>
        We are a united team of seasoned professionals from the fields of design and production. With 25 years of experience, we connect talents and clients with expertise, kindness, and trust, thanks to a rigorously selected network that is deeply rooted in the industry.
    </div>
  )
}
