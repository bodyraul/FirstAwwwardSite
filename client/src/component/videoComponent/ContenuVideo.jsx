import React from 'react'
import SpanVideo from '../../componentReutilisable/VideoComponent/SpanVideo'

export default function ContenuVideo({refUne,refDeux,refTrois}) {
  return (
    <div ref={refUne} className="supp480:h-[60%] supp480:pt-[50px] supp1024:h-[57%] supp1600:h-[65%]  h-[65%] w-full flex flex-col items-center justify-evenly border-b-[2px] border-b-bleuGris ">
        <p ref={refDeux} className="supp480:px-[25px] supp480:py-[10px] supp480:w-[90%] supp480:h-[30%]   w-full pt-[55px] px-0 h-[30%] transform translate-y-[-100%] text-center tracking-[2px] opacity-0 ">
            <SpanVideo boolean={true}>Leading tech,</SpanVideo> <br/>
            <SpanVideo boolean={false} >person</SpanVideo>
            <SpanVideo boolean={true} >care</SpanVideo>
        </p>
        <p ref={refTrois} className="fontUi supp480:h-[70%] supp480:text-[17px] supp480:leading-[30px] supp768:text-[20px] supp768:leading-[35px] supp1024:text-[24px] supp1024:leading-[40px] supp1600:text-[28px] supp1600:leading-[50px] text-[12px] pt-[20px] px-[10px] h-[70%] w-[90%] transform translate-y-[-100%] leading-[23px] tracking-[1px] font-medium text-bleuGris opacity-0">
            A personal touch and careful curation remain at the heart of our identity. Leveraging deep industry and maker experience, we built a custom smart talent platform with automated profile recommendations, intelligent alerts, diversity filters, and more. Over ten years, 20,000+ profiles manually added and still expanding.
        </p>

    </div>
  )
}
