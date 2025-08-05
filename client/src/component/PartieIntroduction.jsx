import React from 'react'
import imgStarDeux from "../assets/images/star-Deux.png"
import welcome from "../assets/images/welcomeDeux.png"
import vague from '../assets/images/logoVague.png'
import ParaDisparition from '../componentReutilisable/introductionComponent/ParaDisparition'
import UseAnimIntro from '../CustomHoocks/intro/UseAnimIntro'
import Nav from './Nav'

export default function PartieIntroduction() {
  
    const {informationGradient,fontAleatoire,fontSpecialUn,fontBasiqueUn,containerLogo,imgStarRef,textDisparitionUn,textDisparitionDeux,textDisparitionTrois}=UseAnimIntro();
    
  return (
    <div className="relative supp480:h-[1200px] supp1600:h-screen bg-blancGris w-screen h-[800px]  flex flex-col">
      <Nav/>
      <img ref={imgStarRef} className='supp480:size-[70px] supp768:size-[80px] supp1024:size-[90px] supp1600:size-[110px] absolute top-[130px] right-[20px] z-[8] opacity-0 transition-transform duration-300 ease-linear size-[60px] ' src={imgStarDeux} alt=" forme d'étoile marron." />
      <div  className=' absolute top-20  flex items-center justify-center h-[200px] w-[200px] z-[8]'>
          <div ref={containerLogo} className='w-full h-full relative opacity-0 transition-all duration-300 ease-linear '>
              <img className=' supp480:w-[75px] supp768:w-[85px] supp1024:w-[95px] supp1600:w-[115px] w-[60px] absolute top-[50px] left-[10px]'  src={vague} alt="Logo orange rond ondulé." />
              <img className=' supp480:w-[95px] supp768:w-[105px] supp1024:w-[115px] supp1600:w-[135px] w-[80px] absolute top-[40px] left-[0px] rotate-[15deg] '  src={welcome} alt="un texte avec inscrit welcome"/>
          </div>
      </div>
      <div ref={informationGradient} style={{transition:"transform 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className='supp480:text-[17px] supp480:leading-[33px] supp480:top-[700px] supp768:text-[20px] supp768:leading-[38px] supp768:top-[780px] supp768:w-[650px] supp1024:text-[24px] supp1024:leading-[43px] supp1024:w-[800px] supp1600:text-[28px] supp1600:leading-[52px] supp1600:w-[1000px] supp1600:top-[820px] w-[80vw] h-auto top-[450px] bg-belge absolute transform rotate-[5deg] translate-x-[-50%] left-[50%]  p-[20px] text-[12px] rounded-[8px] tracking-[1px] leading-[23px] '>
            We are a united team of seasoned professionals from the fields of design and production. With 25 years of experience, we connect talents and clients with expertise, kindness, and trust, thanks to a rigorously selected network that is deeply rooted in the industry.
      </div>
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
      <div style={{backgroundImage:"radial-gradient(#E8E8E8 10%,#F8F7F2 10%)",backgroundSize:"65px 65px"}} className=' h-[50%] w-[90%] my-0 mx-auto mt-[10%]'>
        
      </div>
    </div>
  )
}
