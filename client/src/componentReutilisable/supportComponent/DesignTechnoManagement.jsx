import React from 'react'

export default function DesignBrand(children) {
    
  return (
    <div ref={children.refUne} className='relative overflow-hidden transition-all duration-[0.4s] ease-out transform translate-y-[-100px] opacity-0 border-b-[3px] border-b-bleuGris' >
        <p ref={children.refDeux}  className=' supp550:text-[60px] supp1100:text-[90px] text-[40px] text-bleuGris font-bold hover:cursor-pointer '>
            {children.textUn}
        </p>
        <p ref={children.refTrois} className=' supp550:text-[60px] supp1100:text-[90px] text-[40px] text-bleuGris font-bold hover:cursor-pointer absolute top-0 left-[50%] transform translate-x-[-50%] translate-y-[100%] '>
            {children.textDeux}
        </p>
    </div>
  )
}
