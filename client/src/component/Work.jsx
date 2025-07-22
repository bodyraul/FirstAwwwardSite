import React from 'react'
import pingpong from "../assets/images/pingpong.png"
import cercleCarrer from "../assets/images/cercleCarrer.png"
import cuillere from "../assets/images/cuillere.png"
import oeil from "../assets/images/oeil.png"
import main from "../assets/images/main.png"
import train from "../assets/images/trains.png"
import BarreComponent from '../componentReutilisable/WorkComponent/BarreComponent'
import TitreWorkComponent from '../componentReutilisable/WorkComponent/TitreWorkComponent'
import DivImgTextWorkCompont from '../componentReutilisable/WorkComponent/DivImgTextWorkCompont'
import TabWork from '../tools/TabWork.js'
import UseAnimScrollWork from '../CustomHoocks/work/UseAnimScrollWork.jsx'

export default function Work() {

    UseAnimScrollWork();

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
                    Following numerous talks with candidates and clients, it’s evident that multiple approaches are necessary to assist our partners. As our network needs change and grow.
                </div>
            </div>
            <div className="supp1500:h-[76%] h-[85%] w-full flex flex-col items-center justify-evenly  ">
                <div id="sous-div-une"  className="allSousDiv supp1500:w-[90%] supp1500:mb-[50px] supp860:flex-row supp1500:items-start supp1500:justify-around flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0">
                    <DivImgTextWorkCompont alt="représente une raquette blanche." texte="Complete search" src={pingpong} tab={TabWork[0]} ></DivImgTextWorkCompont>
                    <DivImgTextWorkCompont alt="représente des symboles blancs. On y voit nottament un carré, un triangle et un rond." texte="Contractor sourcing" src={cercleCarrer} tab={TabWork[1]} ></DivImgTextWorkCompont>
                </div>
                <div className=" allSousDiv supp1500:w-[90%] supp1500:mb-[50px] supp860:flex-row supp1500:items-start supp1500:justify-around flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0  ">
                    <DivImgTextWorkCompont alt="représente trois ronds blancs et une petite feuille blanche." texte="Integrated search" src={cuillere} tab={TabWork[2]}  ></DivImgTextWorkCompont>
                     <DivImgTextWorkCompont alt="représente deux yeux blancs et une oreile blanche." texte="Group formation" src={oeil} tab={TabWork[3]}  ></DivImgTextWorkCompont>
                </div>
                <div className="allSousDiv supp1500:w-[90%] supp1500:mb-[50px] supp860:flex-row supp1500:items-start supp1500:justify-around flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0  ">
                    <DivImgTextWorkCompont alt="représente cinq ronds blancs relié par un fils blanc le tout formant un cercle." texte="Senses and signals" src={main} tab={TabWork[4]}  ></DivImgTextWorkCompont>
                    <DivImgTextWorkCompont alt="représente une locomotive blanche." texte="Process" src={train} tab={TabWork[5]}  ></DivImgTextWorkCompont>
                </div>
            </div>
        </div>
    </div>
  )
}
