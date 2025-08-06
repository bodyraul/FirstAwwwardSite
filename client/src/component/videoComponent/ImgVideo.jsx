import React from 'react'
import tab from "../../assets/images/tab.jpg"

export default function ImgVideo({ref}) {
  return (
    <div className="supp480:h-[40%] supp1024:h-[43%]  supp1600:h-[35%]  h-[40%] flex justify-center items-center w-full pb-[2px] ">
        <img ref={ref} className='w-[75%] supp480:w-[400px] supp768:w-[65%] supp1024:w-[90%] supp1600:w-[63%] transform translate-y-[-80%] opacity-0' src={tab} alt="" />
    </div>
  )
}
