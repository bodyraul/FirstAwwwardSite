import React from 'react'
import UseAnimContenuIntro from './../../CustomHoocks/intro/UseAnimContenuIntro';

export default function ContenuIntro() {
  const{informationGradient}=UseAnimContenuIntro();
  return (
    <div ref={informationGradient} className='supp480:w-[80vw] supp480:max-w-[426px] supp480:mb-0 supp480:text-[12px] supp480:leading-[22px] supp768:max-w-[3000px] supp768:w-[650px] supp768:text-[15px] supp768:leading-[26px] supp1024:w-[550px] supp1024:text-[17px] supp1024:leading-[28px] supp1600:w-[750px] supp1600:text-[20px] supp1600:leading-[34px] mb-[56px] w-[180px] bg-belge p-[20px] text-[10px] rounded-[8px] tracking-[1px] leading-[19px] z-[30]  mx-auto'>
        We are a united team of seasoned professionals from the fields of design and production. With 25 years of experience, we connect talents and clients with expertise, kindness, and trust, thanks to a rigorously selected network that is deeply rooted in the industry.
    </div>    
  )
}

