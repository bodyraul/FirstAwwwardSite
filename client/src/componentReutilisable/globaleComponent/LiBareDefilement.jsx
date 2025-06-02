import React from 'react'

export default function LiBareDefilement({text}) {
  if(text){
    return(
      <li className='text-sm text-center list-none text-vertFonce font-[Whyte]'>
           {text}
      </li>
    )
  }
  if(!text){
    return(
      <li className='text-sm text-center list-none text-vertFonce '>
          <p className='bg-vertFonceDeux rounded-[50%] w-[7px] h-[7px] '>
              
          </p>
      </li>
    )
  }
}
