import React from 'react'
import UseAnimImgIntro from './../../CustomHoocks/intro/UseAnimImgIntro';

export default function ImgIntro() {
  // const {containerLogo,imgStarRef}=UseAnimImgIntro()
  return (
    <>
      <div className='flex justify-between items-center w-[90%] h-[70px] z-30 bg-black mx-auto my-[0] '>
        <img className='h-[40px]' alt="" />
        <img className='h-[40px]'  alt="" />
      </div>
    </>
  )
}
