import React from 'react'
import LigneBareDefilement from '../../componentReutilisable/navbar/LigneBareDefilement'

export default function Nav() {
  return (
    <nav className='h-[46px] bg-orangeCLair w-[10000px] z-10 '>
        <ul className='flex h-full no-underline'>
            <LigneBareDefilement></LigneBareDefilement>
            <LigneBareDefilement></LigneBareDefilement>
            <LigneBareDefilement></LigneBareDefilement>
        </ul>
    </nav>
  )
}
