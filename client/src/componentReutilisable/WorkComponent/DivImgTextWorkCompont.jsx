import React from 'react'
import { useEffect } from 'react'
import tabTexte from '../../tools/tab/work/TabTexte'
import tabImg from '../../tools/tab/work/TabImg'
import tabTranslate from '../../tools/tab/work/TabTranslate'

export default function DivImgTextWorkCompont({nb}) {
    useEffect(() => {
      
    }, [])
    
  return (
    <div className="supp1024:w-[38%]  w-[80%] h-full flex flex-col items-start justify-center relative">
        <img className={`supp480:size-[50px] supp768:size-[60px] supp1024:size-[70px] supp1600:size-[80px]  w-[40px] h-[40px] transform ${tabTranslate[nb]} `} src={tabImg.srcImg[nb]} alt={tabImg.alt[nb]} />
        <p className='fontDomine supp480:text-[22px] supp768:text-[25px] supp1024:text-[28px] supp1600:text-[35px] text-[15px] tracking-[1px] text-bleuGris pb-[10px] '>{tabTexte.titre[nb]}</p>
        <p className='supp480:text-[13px] supp480:leading-[23px] supp768:text-[15px] supp768:leading-[25px] supp1024:text-[18px] supp1024:leading-[30px] supp1600:text-[23px] supp1600:leading-[40px]  text-[11px] leading-[20px] tracking-[1px] font-normal text-belge '>
            {tabTexte.texte[nb]}
        </p>
    </div>
    )
}
