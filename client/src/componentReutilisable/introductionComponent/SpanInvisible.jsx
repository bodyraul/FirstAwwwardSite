import React from 'react'
import tabSpan from '../../tools/tab/introduction/TabSpan'

export default function SpanInvisible({ref,nb,children}) {
  return (
    <span ref={ref} className={`absolute top-0 left-[50%] transform translate-x-[-50%]  ${tabSpan.spanInvisible.animation[nb]}`} >
      {children}
    </span> 
  )
}
