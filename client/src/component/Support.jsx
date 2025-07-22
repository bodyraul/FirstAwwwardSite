import React, { useState } from 'react'
import infoIcon from "../../src/assets/images/info-icon.svg"
import { useRef } from 'react'
import BtnSpanSupport from '../componentReutilisable/supportComponent/BtnSpanSupport'
import DesignTechnoManagement from '../componentReutilisable/supportComponent/DesignTechnoManagement'
import onclickSkill from '../fonction/support/OnClickSkill'
import onclickUsers from '../fonction/support/OnClickUsers'
import onclickImg from '../fonction/support/OnClickImg'
import UseAnimSupport from '../CustomHoocks/support/UseAnimSupport'

export default function Support() {
    const btnAnim = useRef();const firstSpan = useRef();const secondSpan = useRef();const titreSouligneUn=useRef();const titreSouligneDeux=useRef();const titreSouligneTrois=useRef();const titreSouligneCacheUn=useRef();const titreSouligneCacheDeux=useRef();const titreSouligneCacheTrois=useRef();const affichageInformation=useRef();
    const allTitreSouligne =[titreSouligneUn,titreSouligneDeux,titreSouligneTrois];
    const allTitreSouligneCache =[titreSouligneCacheUn,titreSouligneCacheDeux,titreSouligneCacheTrois];
    const [boolAnim, setboolAnim] = useState(true);
    const [boolInfo, setboolInfo] = useState(true);
    
    const{divTechnologieEntreprise,supportBtnIntro,divDesigneBrand,divManagamentStartup}= UseAnimSupport();

  return (
    <div style={{fontFamily:"Libre Baskerville"}} className='supp456:h-[1500px] w-screen h-[1200px] bg-blanc flex flex-col items-center justify-around '>
        <div className='h-[160px] flex flex-col items-center justify-around  '>
            <p ref={supportBtnIntro} className='supp550:text-3xl text-2xl font-thin transform translate-y-[-150px] opacity-0 transition-all duration-[0.4s] ease-out'>
                Who we assist
            </p>
            <div  className='w-[270px] supp550:w-[350px] flex items-center justify-between h-[50px] relative py-[28px] px-[30px]  border-[3px] border-bleuGris rounded-[50px]  '>
                <p ref={btnAnim} className='absolute top-0 left-0 bg-bleuGris w-[55%] h-full rounded-[50px] text-grisClair flex items-center justify-center'>
                    The talent
                </p>
                <BtnSpanSupport reference={firstSpan} click={()=>onclickSkill(boolAnim,btnAnim,firstSpan,secondSpan,allTitreSouligne,allTitreSouligneCache,setboolAnim)} text={"The Skills"} ></BtnSpanSupport>
                <BtnSpanSupport reference={secondSpan} click={()=>onclickUsers(boolAnim,btnAnim,firstSpan,secondSpan,allTitreSouligne,allTitreSouligneCache,setboolAnim)} text={"The Users"} ></BtnSpanSupport>
            </div>
        </div>
        <DesignTechnoManagement refUne={divDesigneBrand} refDeux={titreSouligneUn} refTrois={titreSouligneCacheUn} textUn={"Creation"} textDeux="Label"  ></DesignTechnoManagement>         
        <DesignTechnoManagement refUne={divTechnologieEntreprise} refDeux={titreSouligneDeux} refTrois={titreSouligneCacheDeux} textUn={"Innovation "} textDeux="Business " ></DesignTechnoManagement>
        <DesignTechnoManagement refUne={divManagamentStartup} refDeux={titreSouligneTrois} refTrois={titreSouligneCacheTrois} textUn={"Leadership"} textDeux="Operation"  ></DesignTechnoManagement>
        <div className='relative'>
            <div ref={affichageInformation}  style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} className='supp456:w-[350px] supp456:left-[-350%] supp550:w-[400px] supp550:top-[-400%] supp550:left-[-400%] w-[300px] top-[-500%] left-[-300%] absolute bg-white p-6 text-center text-xl text-grisTexte leading-[34px] rounded-[10px] transform rotate-[-3deg] opacity-0 transition-all duration-300 ease-in-out '>
                Say hello, we promise to always be truthful about what we prioritize, and what we avoid.
            </div>
            <img onClick={()=>onclickImg(boolInfo,affichageInformation,setboolInfo)} className='hover:cursor-pointer' src={infoIcon} alt=" ronde et noire, avec un i au milieu faisant référence à information" />
        </div>
    </div>
  )
}
