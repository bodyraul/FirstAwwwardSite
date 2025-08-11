import React from 'react'
import DivImgTextWorkCompont from '../../componentReutilisable/WorkComponent/DivImgTextWorkCompont'


export default function ContenuWork() {
  return (
    <div className="supp480:h-[85%] supp768:h-[82%] supp1024:h-[76%] h-[88%] w-full flex flex-col items-center justify-evenly ">
        <div className="allSousDiv   supp1024:flex-row flex flex-col items-center justify-evenly h-[33.3%] w-full transform translate-y-[-40%] opacity-0 ">
            <DivImgTextWorkCompont nb={0} ></DivImgTextWorkCompont>
            <DivImgTextWorkCompont nb={1} ></DivImgTextWorkCompont>
        </div>
        <div className=" allSousDiv   supp1024:flex-row flex flex-col items-center justify-evenly h-[33.3%] w-full  transform translate-y-[-40%] opacity-0  ">
            <DivImgTextWorkCompont nb={2} ></DivImgTextWorkCompont>
            <DivImgTextWorkCompont nb={3} ></DivImgTextWorkCompont>
        </div>
        <div className="allSousDiv  supp1024:flex-row  flex flex-col items-center justify-evenly h-[33.3%] w-full  transform translate-y-[-40%] opacity-0  ">
            <DivImgTextWorkCompont nb={4} ></DivImgTextWorkCompont>
            <DivImgTextWorkCompont nb={5} ></DivImgTextWorkCompont>
        </div>
    </div>
  )
}
