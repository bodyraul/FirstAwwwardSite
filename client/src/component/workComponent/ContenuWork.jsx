import React from 'react'
import pingpong from "../../assets/images/pingpong.png";
import cercleCarrer from "../../assets/images/cercleCarrer.png";
import cuillere from "../../assets/images/cuillere.png";
import oeil from "../../assets/images/oeil.png";
import main from "../../assets/images/main.png";
import train from "../../assets/images/trains.png";
import DivImgTextWorkCompont from '../../componentReutilisable/WorkComponent/DivImgTextWorkCompont'
import tabWork from '../../tools/tab/workTab/TabWork'

export default function ContenuWork() {
  return (
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
  )
}
