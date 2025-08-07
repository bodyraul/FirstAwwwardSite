import React from 'react'

export default function TitreCacheSupport({ref,textUn,textDeux}) {
    
  return (
    <div ref={ref} className='relative overflow-hidden transition-all duration-[0.4s] ease-out transform translate-y-[-100px] opacity-0 border-b-[3px] border-b-bleuGris' >
        <p  className='titreSouligne supp480:text-[30px] supp768:text-[50px] supp1024:text-[70px] supp1600:text-[90px] text-[15px] text-bleuGris font-bold hover:cursor-pointer '>
            {textUn}
        </p>
        <p  className='titreCache supp480:text-[30px] supp768:text-[50px] supp1024:text-[70px] supp1600:text-[90px] text-[15px] text-bleuGris font-bold hover:cursor-pointer absolute top-0 left-[50%] transform translate-x-[-50%] translate-y-[100%] '>
            {textDeux}
        </p>
    </div>
  )
}
