import React from 'react'

export default function LiBareDefilement({text}) {
  if(text){
    return(
      <div className='text-sm text-center list-none text-black font-[Whyte]'>
           {text}
      </div>
    )
  }
  if(!text){
    return(
      <div className='text-sm text-center list-none text-black '>
          <p className='bg-black rounded-[50%] w-[7px] h-[7px] '>
              
          </p>
      </div>
    )
  }
}
