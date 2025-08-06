import React from 'react'
import pingpong from "../assets/images/pingpong.png";import cercleCarrer from "../assets/images/cercleCarrer.png";import cuillere from "../assets/images/cuillere.png";import oeil from "../assets/images/oeil.png";import main from "../assets/images/main.png";import train from "../assets/images/trains.png";
import BarreComponent from '../componentReutilisable/WorkComponent/BarreComponent'
import TitreWorkComponent from '../componentReutilisable/WorkComponent/TitreWorkComponent'
import DivImgTextWorkCompont from '../componentReutilisable/WorkComponent/DivImgTextWorkCompont'
import tabWork from '../tools/tab/workTab/TabWork.jsx'
import UseAnimScrollWork from '../CustomHoocks/work/UseAnimScrollWork.jsx'

export default function Work() {

    UseAnimScrollWork();

  return (
    <div className="supp480:h-[2000px] supp1024:h-[1800px]  h-[1800px] w-screen bg-orangeMarron flex items-center justify-center transform translate-x-[-5px]">
        <div className="supp860:w-[800px] supp1600:w-[1300px] w-[90%]  border-[3px] border-bleuGris h-[85%] rounded-[30px] ">
            <div className="supp1024:h-[24%] h-[15%] w-full border-b-[3px] border-b-bleuGris flex flex-col items-center justify-center ">
                <div className="flex items-center justify-center mb-[50px] ">
                    <TitreWorkComponent>How</TitreWorkComponent>
                    <BarreComponent></BarreComponent>
                    <TitreWorkComponent>We</TitreWorkComponent>
                    <BarreComponent></BarreComponent>
                    <TitreWorkComponent>Work</TitreWorkComponent>               
                </div>
                <div  className="introText  fontDomine supp480:text-[18px] supp480:leading-[30px] supp768:text-[21px] supp768:leading-[35px] supp1024:text-[24px] supp1024:leading-[40px] supp1600:text-[28px] supp1600:leading-[45px] supp1600:px-[180px] text-[11px] leading-[20px] w-[85%] text-belge py-0 px-[10px] text-center">
                    After many discussions, it's clear we need varied approaches as our network evolves.
                </div>
            </div>
            <div className="supp1024:h-[76%] h-[85%] w-full flex flex-col items-center justify-evenly ">
                <div className="allSousDiv   supp1024:flex-row flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0 ">
                    <DivImgTextWorkCompont translate={tabWork.translate[0]} alt={tabWork.alt[0]} titre="Recruitment" src={pingpong} tab={tabWork.texte[0]} ></DivImgTextWorkCompont>
                    <DivImgTextWorkCompont translate={tabWork.translate[1]} alt={tabWork.alt[1]} titre="Partnership" src={cercleCarrer} tab={tabWork.texte[1]} ></DivImgTextWorkCompont>
                </div>
                <div className=" allSousDiv   supp1024:flex-row flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0  ">
                    <DivImgTextWorkCompont translate={tabWork.translate[2]} alt={tabWork.alt[2]} titre="Integrated search" src={cuillere} tab={tabWork.texte[2]}  ></DivImgTextWorkCompont>
                     <DivImgTextWorkCompont translate={tabWork.translate[3]} alt={tabWork.alt[3]} titre="Group formation" src={oeil} tab={tabWork.texte[3]}  ></DivImgTextWorkCompont>
                </div>
                <div className="allSousDiv  supp1024:flex-row  flex flex-col items-center justify-evenly h-[33.3%] w-full mb-0 transform translate-y-[-40%] opacity-0  ">
                    <DivImgTextWorkCompont translate={tabWork.translate[4]} alt={tabWork.alt[4]} titre="Senses" src={main} tab={tabWork.texte[4]}  ></DivImgTextWorkCompont>
                    <DivImgTextWorkCompont translate={tabWork.translate[5]} alt={tabWork.alt[5]} titre="Process" src={train} tab={tabWork.texte[5]}  ></DivImgTextWorkCompont>
                </div>
            </div>
        </div>
    </div>
  )
}
