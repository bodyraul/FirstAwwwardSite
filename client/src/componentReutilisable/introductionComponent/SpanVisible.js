import React from 'react'
import tabSpan from '../../tools/tab/introduction/TabSpan'

export default function SpanVisible({nb}) {
  return (
     <span className={`${tabSpan.spanVisible.font[nb]} supp480:text-[20px] supp480:leading-[25px] supp768:text-[35px] supp768:leading-[45px] supp1024:text-[45px] supp1024:leading-[55px] supp1600:text-[70px] supp1600:leading-[80px]   text-[16px] leading-[19px] text-bleuGris`}>
        {tabSpan.spanVisible.texte[nb]}
    </span>
  )
}
