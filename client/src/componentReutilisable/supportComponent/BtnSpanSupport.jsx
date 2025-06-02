import React from 'react'

export default function BtnSpanSupport(children) {
  return (
    <span ref={children.reference} onClick={children.click} className='text-grisMoyen transition-opacity duration-300  hover:cursor-pointer'> {children.text} </span>
  )
}
