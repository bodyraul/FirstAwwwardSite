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
    const btnAnim = useRef();const firstSpan = useRef();const secondSpan = useRef();const titreSouligneUn=useRef();const titreSouligneDeux=useRef();
    const titreSouligneTrois=useRef();const titreSouligneCacheUn=useRef();const titreSouligneCacheDeux=useRef();const titreSouligneCacheTrois=useRef();const affichageInformation=useRef();
    const allTitreSouligne =[titreSouligneUn,titreSouligneDeux,titreSouligneTrois];
    const allTitreSouligneCache =[titreSouligneCacheUn,titreSouligneCacheDeux,titreSouligneCacheTrois];
    const [boolAnim, setboolAnim] = useState(true);
    const [boolInfo, setboolInfo] = useState(true);
    const{divTechnologieEntreprise,supportBtnIntro,divDesigneBrand,divManagamentStartup}= UseAnimSupport();

  return (
    <div style={{fontFamily:"Libre Baskerville"}} className='supp480:h-[1200px] supp768:h-[1300px] supp1024:h-[1500px] supp1600:h-[1700px] w-screen h-[800px] bg-blanc flex flex-col items-center justify-around '>
        <div className='h-[160px] flex flex-col items-center justify-around  '>
            <p ref={supportBtnIntro} className='supp480:text-[20px] supp768:text-[25px] supp1024:text-[30px] supp1600:text-[35px] text-[15px] font-thin transform translate-y-[-150px] opacity-0 transition-all duration-[0.4s] ease-out'>
                Who we assist
            </p>
            <div  className='supp480:w-[250px] supp480:text-[15px] supp480:py-[20px] w-[200px] supp768:text-[18px] supp768:w-[300px] supp768:py-[25px] supp1024:text-[21px] supp1024:w-[330px] supp1024:py-[28px] supp1600:w-[420px] supp1600:py-[33px] supp1600:text-[32px] supp1600:px-[20px] flex items-center justify-between h-[35px] relative py-[0px] px-[25px] text-[10px]  border-[3px] border-bleuGris rounded-[50px]  '>
                <p ref={btnAnim} className='absolute top-0 left-0 bg-bleuGris w-[55%] h-full rounded-[50px] text-grisClair flex items-center justify-center'>
                    The Skills
                </p>
                <BtnSpanSupport reference={firstSpan} click={()=>onclickSkill(boolAnim,btnAnim,firstSpan,secondSpan,allTitreSouligne,allTitreSouligneCache,setboolAnim)} text={"The Skills"} ></BtnSpanSupport>
                <BtnSpanSupport reference={secondSpan} click={()=>onclickUsers(boolAnim,btnAnim,firstSpan,secondSpan,allTitreSouligne,allTitreSouligneCache,setboolAnim)} text={"The Users"} ></BtnSpanSupport>
            </div>
        </div>
        <DesignTechnoManagement refUne={divDesigneBrand} refDeux={titreSouligneUn} refTrois={titreSouligneCacheUn} textUn={"Creation"} textDeux="Label"  ></DesignTechnoManagement>         
        <DesignTechnoManagement refUne={divTechnologieEntreprise} refDeux={titreSouligneDeux} refTrois={titreSouligneCacheDeux} textUn={"Innovation "} textDeux="Business " ></DesignTechnoManagement>
        <DesignTechnoManagement refUne={divManagamentStartup} refDeux={titreSouligneTrois} refTrois={titreSouligneCacheTrois} textUn={"Leadership"} textDeux="Operation"  ></DesignTechnoManagement>
        <div className='relative'>
            <div ref={affichageInformation}  style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} className='supp480:text-[17px] supp480:leading-[25px] supp480:w-[350px] supp480:top-[-400%] supp480:left-[-480%] supp768:text-[20px] supp768:leading-[30px] supp768:w-[500px] supp768:left-[-550%] supp1024:text-[25px] supp1024:leading-[40px] supp1024:w-[700px] supp1024:left-[-800%] supp1600:text-[28px] supp1600:leading-[45px] w-[230px] top-[-500%] left-[-360%] absolute bg-white p-6 text-center text-[12px] text-grisTexte leading-[20px] rounded-[10px] transform rotate-[-3deg] opacity-0 transition-all duration-300 ease-in-out '>
                Say hello, we promise to always be truthful about what we prioritize, and what we avoid.
            </div>
            <img onClick={()=>onclickImg(boolInfo,affichageInformation,setboolInfo)} className='supp480:size-[35px] supp768:size-[38px] size-[30px] hover:cursor-pointer' src={infoIcon} alt=" ronde et noire, avec un i au milieu faisant référence à information" />
        </div>
    </div>
  )
}
