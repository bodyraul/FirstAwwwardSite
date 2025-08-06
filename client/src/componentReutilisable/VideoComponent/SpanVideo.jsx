import React from 'react'

export default function SpanVideo({children,boolean}) {
  return (
    <span className={`supp480:text-[30px] supp768:text-[40px] supp1024:text-[50px] supp1600:text-[60px] text-[20px] ${boolean===true?`font-bold`:`font-sans`} text-bleuGris `}>{children}</span>
  )
}
