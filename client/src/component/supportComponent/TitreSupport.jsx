import React from 'react'
import BtnSpanSupport from '../../componentReutilisable/supportComponent/BtnSpanSupport'
import { useState } from 'react'
import { useRef } from 'react'
import onclickSkill from './../../fonction/support/OnClickSkill';
import onclickUsers from '../../fonction/support/OnClickUsers';

export default function TitreSupport({ref}) {
    const [boolAnim, setboolAnim] = useState(true); 
    const btnAnim = useRef();
    const firstSpan = useRef();
    const secondSpan = useRef();
  return (
    <div className='h-[160px] flex flex-col items-center justify-around  '>
        <p ref={ref} className='supp480:text-[20px] supp768:text-[25px] supp1024:text-[30px] supp1600:text-[35px] text-[15px] font-thin transform translate-y-[-150px] opacity-0 transition-all duration-[0.4s] ease-out'>
            Who we assist
        </p>
        <div  className='supp480:w-[250px] supp480:text-[15px] supp480:py-[20px] w-[200px] supp768:text-[18px] supp768:w-[300px] supp768:py-[25px] supp1024:text-[21px] supp1024:w-[330px] supp1024:py-[28px] supp1600:w-[420px] supp1600:py-[33px] supp1600:text-[32px] supp1600:px-[20px] flex items-center justify-between h-[35px] relative py-[0px] px-[25px] text-[10px]  border-[3px] border-bleuGris rounded-[50px]  '>
            <p ref={btnAnim} className='absolute top-0 left-0 bg-bleuGris w-[55%] h-full rounded-[50px] text-grisClair flex items-center justify-center'>
                The Skills
            </p>
            <BtnSpanSupport reference={firstSpan} click={()=>onclickSkill(boolAnim,btnAnim,firstSpan,secondSpan,setboolAnim)} text={"The Skills"} ></BtnSpanSupport>
            <BtnSpanSupport reference={secondSpan} click={()=>onclickUsers(boolAnim,btnAnim,firstSpan,secondSpan,setboolAnim)} text={"The Users"} ></BtnSpanSupport>
        </div>
    </div>
  )
}
