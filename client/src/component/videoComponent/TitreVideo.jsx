import React from 'react'

export default function TitreVideo({ref}) {
  return (
    <>
    <div className="supp480:w-[300px] supp480:h-[280px] supp768:w-[350px] supp768:h-[330px] supp1024:w-[400px] supp1024:h-[380px] supp1600:w-[500px] supp1600:h-[480px] w-[250px] border-[4px] border-black h-[230px] my-0 mx-auto  rounded-[50%] flex items-center justify-center">
        <span ref={ref} className="supp480:text-[35px] supp768:text-[55px] supp1024:text-[70px] supp1600:text-[90px] text-[20px] font-bold text-bleuGris transform translate-y-[-200%] opacity-0 ">
            Why pick?
        </span>
    </div>
    <div className=" h-[100px] w-[3px] bg-black my-0 mx-auto ">
        
    </div>
    </>
  )
}
