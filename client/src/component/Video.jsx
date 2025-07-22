import React from 'react'
import { useRef } from 'react'
import tab from "../assets/images/tab.jpg"
import UseAnimScrollVideo from '../CustomHoocks/video/UseAnimScrollVideo'
import scrollAnimVideo from '../fonction/video/ScrollAnimVideo'

export default function Video() {

    const titreContainerQuatre = useRef("");const containerTitrePageQuatre = useRef("");const containerContenuTitrePageQuatre = useRef("");const containerContenuTextePageQuatre = useRef("");const containPrincipaleDeuxPQuatre = useRef("");const containerImg = useRef("");

    UseAnimScrollVideo(()=>scrollAnimVideo(containerTitrePageQuatre,titreContainerQuatre,containerContenuTitrePageQuatre,containerContenuTextePageQuatre,containerImg));
    

  return (
    <div  className="fontAbril bg-belge w-full h-[1810px] pt-[200px] ">
        <div className="supp456:w-[400px] supp1274:w-[550px] w-[250px] border-[4px] border-black h-[230px] my-0 mx-auto  rounded-[50%] flex items-center justify-center">
            <span ref={titreContainerQuatre} className="supp456:text-[55px] supp1274:text-[70px] text-[35px] font-bold text-bleuGris transform translate-y-[-200%] opacity-0 ">
                Why pick?
            </span>
        </div>
        <div className="supp1274:h-[180px] h-[100px] w-[3px] bg-black my-0 mx-auto ">
         
        </div>
        <div className="supp456:h-[1150px] supp1274:w-[1200px] h-[1000px] w-[90%] border-[4px] border-bleuGris my-0 mx-auto rounded-[30px] ">
            <div ref={containerTitrePageQuatre} className="supp456:h-[50%] supp610:h-[30%] supp1061:h-[25%] supp1061:flex-row  h-[65%] w-full flex flex-col items-center justify-evenly border-b-[2px] border-b-bleuGris ">
                <p ref={containerContenuTitrePageQuatre} className="supp456:px-[25px] supp456:py-[10px] supp456:w-[90%] supp456:text-[40px] supp1061:text-[60px] supp1274:h-full supp1274:w-[50%] supp1274:text-[80px] text-[35px] w-full py-[80px] px-0 h-[40%] transform translate-y-[-100%] text-center tracking-[2px] opacity-0">
                    <span className='font-bold text-bleuGris '>Leading tech,</span> <br/>
                    <span className='fontUi text-bleuGris '>person</span> 
                    <span className='font-bold text-bleuGris '>care</span>
                </p>
                <p ref={containerContenuTextePageQuatre} className="fontUi supp456:text-[15px] supp456:px-10px supp456:py-[35px] supp1061:w-[50%] supp1061:h-[100%] supp1274:text-[18px] supp1274:px-[50px] text-[13px] py-0 px-[10px] h-[70%] w-[90%] transform translate-y-[-100%] leading-[28px] tracking-[1px] font-medium text-bleuGris opacity-0">
                    A personal touch and careful curation remain at the heart of our identity. Leveraging deep industry and maker experience, we built a custom smart talent platform with automated profile recommendations, intelligent alerts, diversity filters, and more. Over ten years, 20,000+ profiles manually added and still expanding.
                </p>

            </div>
            <div className="supp456:h-[50%] supp610:h-[75%] supp1274:items-end h-[35%] flex justify-center items-center w-full pb-[2px] ">
                <img ref={containerImg} className='w-full supp1061:w-[80%] transform translate-y-[-80%] opacity-0' src={tab} alt="" />
            </div>
        </div>
        <div ref={containPrincipaleDeuxPQuatre} className="my-0 mx-auto mt-[300px] rounded-[30px] relative ">
        </div>
    </div>
  )
}
