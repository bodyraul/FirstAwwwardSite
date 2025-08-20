import React from 'react'
import LigneBareDefilement from '../../componentReutilisable/navbar/LigneBareDefilement'

export default function Nav() {
  return (
    <nav className='h-[46px] bg-orangeMarron w-[10000px] z-10 '>
        <div className='flex h-full no-underline'>
            <LigneBareDefilement></LigneBareDefilement>
            <LigneBareDefilement></LigneBareDefilement>
            <LigneBareDefilement></LigneBareDefilement>
        </div>
    </nav>
  )
}
