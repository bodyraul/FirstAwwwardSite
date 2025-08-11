import React from 'react'
import BtnSpanSupport from '../../componentReutilisable/supportComponent/BtnSpanSupport'
import { useState } from 'react'
import { useRef } from 'react'
import onclickSkill from '../../fonction/support/OnClickSkill';
import onclickUsers from '../../fonction/support/OnClickUsers';

export default function TitreSupport({ref}) {
    const [boolAnim, setboolAnim] = useState(true); 
    const btnAnim = useRef();
    const firstSpan = useRef();
    const secondSpan = useRef();
  return (
    <div className='supp480:h-[90px] supp768:h-[115px] supp1024:h-[130px] supp1600:h-[160px] h-[75px] flex flex-col items-center justify-between  '>
        <p ref={ref} className='supp480:text-[18px] supp768:text-[23px] supp1024:text-[27px] supp1600:text-[35px] text-[15px] font-thin transform translate-y-[-150px] opacity-0 transition-all duration-[0.4s] ease-out'>
            Who we assist
        </p>
        <div  className='supp480:w-[190px] supp480:text-[10px] supp480:py-[17px] supp768:px-[25px] supp768:text-[13px] supp768:w-[230px] supp768:py-[20px] supp1024:px-[40px] supp1024:text-[16px] supp1024:w-[300px] supp1024:py-[24px] supp1600:w-[350px] supp1600:py-[27px] supp1600:text-[20px] supp1600:px-[40px] w-[160px] flex items-center justify-between h-[35px] relative py-[0px] px-[20px] text-[8px]  border-[3px] border-bleuGris rounded-[50px]  '>
            <p ref={btnAnim} className='absolute top-0 left-0 bg-bleuGris w-[55%] h-full rounded-[50px] text-grisClair flex items-center justify-center'>
                The Skills
            </p>
            <BtnSpanSupport reference={firstSpan} click={()=>onclickSkill(boolAnim,btnAnim,firstSpan,secondSpan,setboolAnim)} text={"The Skills"} ></BtnSpanSupport>
            <BtnSpanSupport reference={secondSpan} click={()=>onclickUsers(boolAnim,btnAnim,firstSpan,secondSpan,setboolAnim)} text={"The Users"} ></BtnSpanSupport>
        </div>
    </div>
  )
}
