import React from 'react'
import tabText from '../../tools/tab/support/TabText'

export default function TitreCacheSupport({ref,nb}) {
    
  return (
    <div ref={ref} className='relative overflow-hidden transition-all duration-[0.4s] ease-out transform translate-y-[-100px] opacity-0 border-b-[3px] border-b-bleuGris' >
        <p  className='titreSouligne supp480:text-[20px] supp768:text-[30px] supp1024:text-[40px] supp1600:text-[60px] text-[16px] text-bleuGris font-bold hover:cursor-pointer '>
            {tabText.textUn[nb]}
        </p>
        <p  className='titreCache supp480:text-[20px] supp768:text-[30px] supp1024:text-[40px] supp1600:text-[60px] text-[16px] text-bleuGris font-bold hover:cursor-pointer absolute top-0 left-[50%] transform translate-x-[-50%] translate-y-[100%] '>
            {tabText.textDeux[nb]}
        </p>
    </div>
  )
}
