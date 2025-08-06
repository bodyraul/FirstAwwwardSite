import React from 'react'
import ParaDisparition from '../../componentReutilisable/introductionComponent/ParaDisparition'
import UseAnimTitreIntro from '../../CustomHoocks//intro/UseAnimTitreIntro'

export default function TitreIntro() {
  const {fontBasiqueUn,fontSpecialUn,textDisparitionUn,textDisparitionDeux,textDisparitionTrois,fontAleatoire}=UseAnimTitreIntro();
  return (
    <div className=" supp480:top-[350px]  supp1024:top-[310px] supp1600:top-[290px] leading-[10px] top-[260px] w-full absolute left-0 text-center ">
        <p ref={fontBasiqueUn} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className=" supp480:text-[30px] supp480:leading-[70px] supp768:text-[60px] supp768:leading-[90px] supp1024:text-[80px] supp1024:leading-[95px] supp1600:text-[90px] supp1600:leading-[105px] text-[15px] leading-[32px] font-[Cormorant] tracking-[5px] p-0 text-bleuGris transform translate-y-[-500px] opacity-0">A perspective on</p>
        <div ref={fontSpecialUn} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp480:text-[30px] supp480:leading-[50px] supp768:text-[50px] supp768:leading-[70px] supp1024:text-[70px] supp1024:leading-[90px] supp1600:text-[90px] supp1600:leading-[105px] font-[Candal] font-bold pl-[5px] text-bleuGris transform translate-y-[-500px] rotate-[-10deg] text-[15px] leading-[32px] relative overflow-hidden opacity-0 py-[5px] ">
            <p className=' translate-y-[-5%]' ref={textDisparitionUn}>selection</p>
            <ParaDisparition reference={textDisparitionDeux} text="cohesion" ></ParaDisparition>
            <ParaDisparition reference={textDisparitionTrois} text="connection" ></ParaDisparition>
        </div>
        <p ref={fontAleatoire} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="transform translate-y-[-500px] rotate-[-10deg] opacity-0">
            <span  style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp480:text-[30px] supp480:leading-[50px] supp768:text-[60px] supp768:leading-[70px] supp1024:text-[80px] supp1024:leading-[90px] supp1600:text-[90px] supp1600:leading-[105px] text-[15px] leading-[0px] font-[Cormorant] tracking-[5px] p-0 text-bleuGris transform translate-y-[-500px]   ">with a</span>
            <span  style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp480:text-[30px] supp768:text-[50px]  supp1024:text-[70px] supp1600:text-[90px]  font-[Candal] font-bold pl-[5px] text-bleuGris transform translate-y-[-500px] rotate-[10deg] text-[15px] leading-[0px] relative overflow-hidden ">build spirit</span>
        </p>
    </div>
  )
}
