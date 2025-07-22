import React from 'react'
import LigneBareDefilement from '../componentReutilisable/globaleComponent/LigneBareDefilement'
import imgStarDeux from "../assets/images/star-Deux.png"
import welcome from "../assets/images/welcomeDeux.png"
import vague from '../assets/images/logoVague.png'
import ParaDisparition from '../componentReutilisable/introductionComponent/ParaDisparition'
import UseAnimIntro from '../CustomHoocks/intro/UseAnimIntro'

export default function PartieIntroduction() {
  
    const {informationGradient,fontAleatoire,fontSpecialUn,fontBasiqueUn,containerLogo,imgStarRef,textDisparitionUn,textDisparitionDeux,textDisparitionTrois}=UseAnimIntro();
    
  return (
    <div className="bg-blancGris w-screen h-screen min-h-[1200px] flex flex-col">
       <nav className='h-[46px] bg-orangeCLair w-[10000px] z-10 '>
            <ul className='flex h-full no-underline'>
               <LigneBareDefilement></LigneBareDefilement>
               <LigneBareDefilement></LigneBareDefilement>
               <LigneBareDefilement></LigneBareDefilement>
            </ul>
        </nav>
        <img ref={imgStarRef} className='supp860:w-[110px] supp860:h-[110px]  supp510:h-[90px] supp510:w-[90px] supp691:left[90%] supp1700:top[130px] supp1700:left[215px] absolute top-[170px] left-[80%] z-[8] opacity-0 transition-transform duration-300 ease-linear h-[70px] w-[70px] ' src={imgStarDeux} alt=" forme d'étoile marron." />
        <div  className='supp1700:right[150px] absolute top-20 left-[5%] flex items-center justify-center h-[200px] w-[200px] z-[8]'>
            <div ref={containerLogo} className='w-full h-full relative opacity-0 transition-all duration-300 ease-linear'>
                <img className='supp860:w-[150px] supp510:w-[120px] w-[80px] absolute top-[85px] left-0'  src={vague} alt="Logo orange rond ondulé." />
                <img className='supp860:w-[145px] supp510:w-[115px] w-[80px] absolute top-[85px] left-[0%] rotate-[15deg] '  src={welcome} alt="un texte avec inscrit welcome"/>
            </div>
        </div>
        <div style={{backgroundImage:"radial-gradient(#E8E8E8 10%,#F8F7F2 10%)",backgroundSize:"65px 65px"}} className='relative h-[50%] w-[90%] my-0 mx-auto mt-[10%]'>
            <div ref={informationGradient} style={{transition:"transform 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className='supp800:left-[10%] supp800:w-[650px] supp800:h-[200px] supp900:left-[20%] supp1205:left-[30%] supp1700:top-[65%] left-[2%] w-[80vw] h-auto top-[100%] bg-belge absolute transform rotate-[15deg] translate-y-[-900px] p-[20px] text-[19px] rounded-[8px] tracking-[1px] leading-[30px] '>
                We are a united team of seasoned professionals from the fields of design and production. With 25 years of experience, we connect talents and clients with expertise, kindness, and trust, thanks to a rigorously selected network that is deeply rooted in the industry.
            </div>
           <div className="supp691:leading-[90px] supp1205:top-[25%] supp1700:top-[10%] leading-[10px] top-[40%] w-full absolute left-0 text-center ">
                <p ref={fontBasiqueUn} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className=" supp422:text-[30px] supp422:leading-[50px] supp691:text-[60px] supp691:leading-[70px] supp1205:text-[80px] supp1205:leading-[90px] text-[25px] leading-[45px] font-[Cormorant] tracking-[5px] p-0 text-bleuGris transform translate-y-[-500px] opacity-0">A fresh perspective on</p>
                <div ref={fontSpecialUn} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp422:text-[30px] supp422:leading-[50px] supp691:text-[50px] supp691:leading-[70px] supp1205:text-[70px] supp1205:leading-[90px] font-[Candal] font-bold pl-[5px] text-bleuGris transform translate-y-[-500px] rotate-[-10deg] text-[25px] leading-[45px] relative overflow-hidden opacity-0 py-[5px] ">
                    <p ref={textDisparitionUn}>  Expert selection</p>
                    <ParaDisparition reference={textDisparitionDeux} text="Team cohesion" ></ParaDisparition>
                    <ParaDisparition reference={textDisparitionTrois} text="Human connection" ></ParaDisparition>
                </div>
                <p ref={fontAleatoire} style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="transform translate-y-[-500px] rotate-[-10deg] opacity-0">
                  <span  style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp422:text-[30px] supp422:leading-[50px] supp691:text-[60px] supp691:leading-[70px] supp1205:text-[80px] supp1205:leading-[90px] text-[23px] leading-[45px] font-[Cormorant] tracking-[5px] p-0 text-bleuGris transform translate-y-[-500px]   ">with a</span>
                  <span  style={{transition:"all 0.8s cubic-bezier(0.17, 0.54, 0.27, 0.79)"}} className="supp422:text-[30px] supp422:leading-[50px] supp691:text-[50px] supp691:leading-[70px] supp1205:text-[70px] supp1205:leading-[90px] font-[Candal] font-bold pl-[5px] text-bleuGris transform translate-y-[-500px] rotate-[10deg] text-[23px] leading-[45px] relative overflow-hidden ">build spirit</span>
                </p>
           </div>
        </div>
    </div>
  )
}
