import React from 'react'
import SpanVideo from '../../componentReutilisable/VideoComponent/SpanVideo'

export default function ContenuVideo({refDeux,refTrois}) {
  return (
    <div  className="animContenuVideo h-[100%] w-full flex flex-col items-center justify-evenly  ">
        <p ref={refDeux} className="supp480:w-[90%]   w-full  px-0  transform translate-y-[-100%] text-center tracking-[2px] opacity-0 ">
            <SpanVideo boolean={true}>Leading tech,</SpanVideo> <br/>
            <SpanVideo boolean={false} >person</SpanVideo>
            <SpanVideo boolean={true} >care</SpanVideo>
        </p>
        <p ref={refTrois} className="fontUi  supp480:text-[12px] supp480:leading-[22px] supp768:text-[15px] supp768:leading-[26px] supp1024:text-[17px] supp1024:leading-[28px] supp1600:text-[20px] supp1600:leading-[34px] text-[10px]  px-[10px]  w-[90%] transform translate-y-[-100%] leading-[19px] tracking-[1px] font-medium text-bleuGris opacity-0">
            A personal touch and careful curation remain at the heart of our identity. Leveraging deep industry and maker experience, we built a custom smart talent platform with automated profile recommendations, intelligent alerts, diversity filters, and more. Over ten years, 20,000+ profiles manually added and still expanding.
        </p>
    </div>
  )
}
