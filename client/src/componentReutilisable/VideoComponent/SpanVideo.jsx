import React from 'react'

export default function SpanVideo({children,boolean}) {
  return (
    <span className={`${boolean===true?`font-bold`:`font-sans`} text-bleuGris`}>{children}</span>
  )
}
