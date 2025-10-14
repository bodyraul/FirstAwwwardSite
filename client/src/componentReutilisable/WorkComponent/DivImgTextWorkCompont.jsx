import React from 'react'
import { useEffect } from 'react'
import tabTexte from '../../tools/tab/work/TabTexte'
import tabImg from '../../tools/tab/work/TabImg'
import tabTranslate from '../../tools/tab/work/TabTranslate'

export default function DivImgTextWorkCompont({nb}) {
    useEffect(() => {
      
    }, [])
    
  return (
    <div className="supp1024:w-[38%] supp1600:w-[40%] supp1024:h-[80%] supp1024:justify-between w-[80%] h-full flex flex-col items-start justify-center relative ">
        <img className={`supp480:size-[50px] supp768:size-[60px] supp1024:size-[70px] supp1600:size-[80px]  size-[40px] transform ${tabTranslate[nb]}  `} src={tabImg.srcImg[nb]} alt={tabImg.alt[nb]} />
        <p className='fontDomine supp480:text-[18px] supp768:text-[23px] supp1024:text-[27px] supp1600:text-[32px] text-[15px] tracking-[1px] text-black pb-[10px] '>{tabTexte.titre[nb]}</p>
        <p className='supp480:text-[12px] supp480:leading-[22px] supp768:text-[15px] supp768:leading-[26px] supp1024:text-[17px] supp1024:leading-[28px] supp1600:text-[20px] supp1600:leading-[34px]  text-[10px] leading-[19px] tracking-[1px] font-normal text-black '>
            {tabTexte.texte[nb]}
        </p>
    </div>
    )
}
