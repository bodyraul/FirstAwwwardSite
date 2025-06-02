import React from 'react'

export default function ParaDisparition(children) {
  return (
    <p ref={children.reference} className="absolute top-0 left-0 w-full text-center transform translate-y-[100%]" > {children.text} </p>
  )
}
