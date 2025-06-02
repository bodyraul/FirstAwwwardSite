import React from 'react'
import serviceUn from "../assets/images/services-icons-1b-white.svg"
import serviceDeux from "../assets/images/services-icons-2b-white.svg"
import serviceTrois from "../assets/images/services-icons-3b-white.svg"
import serviceQuatre from "../assets/images/services-icons-4b-white.svg"
import serviceCinq from "../assets/images/services-icons-5b-white.svg"
import serviceSix from "../assets/images/services-icons-6b-white.svg"
import { useEffect } from 'react'
import BarreComponent from '../componentReutilisable/WorkComponent/BarreComponent'
import TitreWorkComponent from '../componentReutilisable/WorkComponent/TitreWorkComponent'
import DivImgTextWorkCompont from '../componentReutilisable/WorkComponent/DivImgTextWorkCompont'
import TabWork from '../tools/TabWork.js'

export default function Work() {

    const scrollUn=()=>{
        const introText = document.querySelector('.introText');
        const barAnim = document.querySelectorAll('.barre');
        let tailleEcran = window.innerHeight;
            let situerEnteteTroisemeContainer = introText.getBoundingClientRect().top;
            if(situerEnteteTroisemeContainer>=tailleEcran*75/100){
                barAnim.forEach(element => {
                    element.style.height="0px";
                    element.classList.remove('animBarreTroisiemeContainer');
                    element.classList.add('animBarreTroisiemeContainerDeux');
                });
                
            }

            if(situerEnteteTroisemeContainer<=tailleEcran*75/100){
                barAnim.forEach(element => {
                    element.style.height="3px";
                    element.classList.remove('animBarreTroisiemeContainerDeux');
                    element.classList.add('animBarreTroisiemeContainer');
                });
                
            }
    }
    const scrollDeux=()=>{
        const allSousDiv =document.querySelectorAll('.allSousDiv');
         let tailleEcran = window.innerHeight;
            allSousDiv.forEach(element => {
                if(element.getBoundingClientRect().top<=tailleEcran*60/100){
                    element.classList.add('animSousDiv');
                }
        });
    }

    useEffect(() => {
        window.addEventListener('scroll',scrollUn);
        window.addEventListener('scroll',scrollDeux);

        return () => {
         window.removeEventListener('scroll',scrollUn);
        window.removeEventListener('scroll',scrollDeux);
      }
    }, [])
    

  return (
    <div className="supp860:h-[1900px] h-[2500px] w-screen bg-orangeMarron flex items-center justify-center ">
        <div className="supp860:w-[800px] supp1500:w-[1300px] w-[90%]  border-[3px] border-bleuGris h-[85%] rounded-[30px] ">
            <div className="supp860:h-[24%] h-[15%] w-full border-b-[3px] border-b-bleuGris flex flex-col items-center justify-center ">
                <div className="flex items-center justify-center mb-[50px] ">
                    <TitreWorkComponent>How</TitreWorkComponent>
                    <BarreComponent></BarreComponent>
                    <TitreWorkComponent>We</TitreWorkComponent>
                    <BarreComponent></BarreComponent>
                    <TitreWorkComponent>Work</TitreWorkComponent>               
                </div>
                <div  className="introText fontDomine supp510:text-[15px] supp510:leading-[35px] supp860:text-[20px] supp860:w-full supp1500:text-[31px] supp1500:leading-[46px] supp1500:px-[180px] text-[13px] leading-[25px] w-[85%] text-belge py-0 px-[10px] text-center">
                    After countless conversations with job seekers and clients, its clear there is more
                    than one method required to support our partners. As the needs of our network evolve, so do we.
                </div>
            </div>
            <div className="supp1500:h-[76%] h-[85%] w-full flex flex-col items-center justify-evenly  ">
                <div id="sous-div-une"  className="allSousDiv supp1500:w-[90%] supp1500:mb-[50px] supp860:flex-row supp1500:items-start supp1500:justify-around flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0">
                    <DivImgTextWorkCompont alt="représente une raquette blanche." texte="Full-Time Search" src={serviceUn} tab={TabWork[0]} ></DivImgTextWorkCompont>
                    <DivImgTextWorkCompont alt="représente des symboles blancs. On y voit nottament un carré, un triangle et un rond." texte="Freelancer Placement" src={serviceDeux} tab={TabWork[1]} ></DivImgTextWorkCompont>
                </div>
                <div className=" allSousDiv supp1500:w-[90%] supp1500:mb-[50px] supp860:flex-row supp1500:items-start supp1500:justify-around flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0  ">
                    <DivImgTextWorkCompont alt="représente trois ronds blancs et une petite feuille blanche." texte="Embedded Search" src={serviceTrois} tab={TabWork[2]}  ></DivImgTextWorkCompont>
                     <DivImgTextWorkCompont alt="représente deux yeux blancs et une oreile blanche." texte="Team Constitution" src={serviceQuatre} tab={TabWork[3]}  ></DivImgTextWorkCompont>
                </div>
                <div className="allSousDiv supp1500:w-[90%] supp1500:mb-[50px] supp860:flex-row supp1500:items-start supp1500:justify-around flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0  ">
                    <DivImgTextWorkCompont alt="représente cinq ronds blancs relié par un fils blanc le tout formant un cercle." texte="Eyes and Ears" src={serviceCinq} tab={TabWork[4]}  ></DivImgTextWorkCompont>
                    <DivImgTextWorkCompont alt="représente une locomotive blanche." texte="Pipeline" src={serviceSix} tab={TabWork[5]}  ></DivImgTextWorkCompont>
                </div>
            </div>
        </div>
    </div>
  )
}
