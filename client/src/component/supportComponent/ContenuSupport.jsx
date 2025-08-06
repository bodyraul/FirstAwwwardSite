import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import onclickImg from '../../fonction/support/OnClickImg'
import infoIcon from "../../../src/assets/images/info-icon.svg"

export default function ContenuSupport() {

    const [boolInfo, setboolInfo] = useState(true);
    const affichageInformation=useRef();
    
  return (
     <div className='relative'>
        <div ref={affichageInformation}  style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} className='supp480:text-[17px] supp480:leading-[25px] supp480:w-[350px] supp480:top-[-400%] supp480:left-[-480%] supp768:text-[20px] supp768:leading-[30px] supp768:w-[500px] supp768:left-[-550%] supp1024:text-[25px] supp1024:leading-[40px] supp1024:w-[700px] supp1024:left-[-800%] supp1600:text-[28px] supp1600:leading-[45px] w-[230px] top-[-500%] left-[-360%] absolute bg-white p-6 text-center text-[12px] text-grisTexte leading-[20px] rounded-[10px] transform rotate-[-3deg] opacity-0 transition-all duration-300 ease-in-out '>
            Say hello, we promise to always be truthful about what we prioritize, and what we avoid.
        </div>
        <img onClick={()=>onclickImg(boolInfo,affichageInformation,setboolInfo)} className='supp480:size-[35px] supp768:size-[38px] size-[30px] hover:cursor-pointer' src={infoIcon} alt=" ronde et noire, avec un i au milieu faisant référence à information" />
    </div>
  )
}
