import React from 'react'
import { useEffect } from 'react'

export default function DivImgTextWorkCompont(children) {
    useEffect(() => {
      
    }, [])
    
  return (
    <div className="supp860:w-[38%] supp1500:justify-end w-[80%] h-full flex flex-col items-start justify-center relative ">
        <img className='supp510:w-[80px] supp510:h-[80px] supp860:w-[130px] supp860:h-[130px] supp1500:top-[8%] w-[50px] h-[50px] top-0 left-[-5%] absolute' src={children.src} alt={children.alt} />
        <p className='fontDomine supp510:text-[22px] supp1500:text-[32px] text-[18px] tracking-[1px] text-bleuGris pb-[10px] '>{children.texte}</p>
        <p className='supp510:text-[15px] supp1500:text-[19px] supp1500:font-bold supp1500:leading-[30px] text-[13px] tracking-[1px] leading-[28px] font-light text-blancJaune '>
            {children.tab}
        </p>
    </div>
    )
}
