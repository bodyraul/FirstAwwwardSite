import React from 'react'
import ParaDisparition from '../../componentReutilisable/introductionComponent/ParaDisparition'
import UseAnimTitreIntro from '../../CustomHoocks//intro/UseAnimTitreIntro'

export default function TitreIntro() {
  const {fontBasiqueUn,fontSpecialUn,textDisparitionUn,textDisparitionDeux,textDisparitionTrois,fontAleatoire}=UseAnimTitreIntro();
  return (
    <div className="supp480:pt-[80px] supp480:mb-[120px] supp768:pt-[100px] supp768:mb-[160px] supp1024:pt-[150px] supp1024:mb-[200px] supp1600:pt-[170px] supp1600:mb-[220px] leading-[10px] w-full left-0 text-center  pt-[50px] z-[30] mb-[100px]">
        <p ref={fontBasiqueUn} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className=" supp480:text-[35px] supp480:leading-[45px] supp768:text-[50px] supp768:leading-[60px] supp1024:text-[70px] supp1024:leading-[70px] supp1600:text-[80px] supp1600:leading-[75px] text-[20px] leading-[32px] font-[Cormorant] tracking-[5px] p-0 text-bleuGris transform translate-y-[-500px] opacity-0">A perspective on</p>
        <div ref={fontSpecialUn} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp480:h-[50px] supp768:h-[65px] supp1024:h-[82px] supp1600:h-[110px] supp480:text-[35px] supp480:leading-[50px] supp768:text-[40px] supp768:leading-[70px] supp1024:text-[60px] supp1024:leading-[80px] supp1600:text-[75px] supp1600:leading-[105px] h-[43px] font-[Candal] font-bold pl-[5px] text-bleuGris transform translate-y-[-500px] rotate-[-10deg] text-[20px] leading-[32px] relative overflow-hidden opacity-0 py-[5px] ">
            <p className='absolute top-0 left-0 w-full text-center transform' ref={textDisparitionUn}>selection</p>
            <ParaDisparition reference={textDisparitionDeux} text="cohesion" ></ParaDisparition>
            <ParaDisparition reference={textDisparitionTrois} text="connection" ></ParaDisparition>
        </div>
        <p ref={fontAleatoire} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="transform translate-y-[-500px] rotate-[-10deg] opacity-0">
            <span  style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp480:text-[35px] supp480:leading-[50px] supp768:text-[50px] supp768:leading-[60px] supp1024:text-[60px] supp1024:leading-[70px] supp1600:text-[80px] supp1600:leading-[95px] text-[20px] leading-[0px] font-[Cormorant] tracking-[5px] p-0 text-bleuGris transform translate-y-[-500px]   ">with a</span>
            <span  style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp480:text-[35px] supp768:text-[40px]  supp1024:text-[60px] supp1600:text-[75px]  font-[Candal] font-bold pl-[5px] text-bleuGris transform translate-y-[-500px] rotate-[10deg] text-[20px] leading-[0px] relative overflow-hidden ">build spirit</span>
        </p>
    </div>
  )
}
