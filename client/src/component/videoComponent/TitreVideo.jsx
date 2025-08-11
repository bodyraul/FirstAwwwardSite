import React from 'react'

export default function TitreVideo({ref}) {
  return (
    <>
    <div className="supp480:size-[180px] supp768:size-[250px]  supp1024:size-[300px] supp1600:size-[350px] size-[150px] border-[4px] border-black  my-0 mx-auto  rounded-[50%] flex items-center justify-center">
        <span ref={ref} className="supp480:text-[20px] supp768:text-[30px] supp1024:text-[40px] supp1600:text-[60px] text-[16px] font-bold text-bleuGris transform translate-y-[-200%] opacity-0 ">
            Why pick?
        </span>
    </div>
    <div className=" h-[40px] w-[3px] bg-black my-0 mx-auto ">
        
    </div>
    </>
  )
}
