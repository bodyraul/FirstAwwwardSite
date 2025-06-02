import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function Video() {

    const titreContainerQuatre = useRef("");const containerTitrePageQuatre = useRef("");const containerContenuTitrePageQuatre = useRef("");const containerContenuTextePageQuatre = useRef("");const containPrincipaleDeuxPQuatre = useRef("");

    const onScroll=()=>{
    const hauteurEcran = window.innerHeight*78/100;
    const hauteurDivContainerQuatre = containerTitrePageQuatre.current.getBoundingClientRect().top;
    if(hauteurDivContainerQuatre<=hauteurEcran){
        titreContainerQuatre.current.classList.add('animApparitionTexteContainerQuatre');
        setTimeout(() => {
            containerContenuTitrePageQuatre.current.classList.add('animApparitionTexteContainerQuatreDeux');
        }, 150);
        setTimeout(() => {
            containerContenuTextePageQuatre.current.classList.add('animApparitionTexteContainerQuatreDeux');
        }, 300);
    }
    }
    
    useEffect(() => {
      window.addEventListener("scroll",onScroll);
    
      return () => {
        window.removeEventListener("scroll",onScroll);
      }
    }, [])
    

  return (
    <div  className="fontAbril bg-belge w-full h-[1810px] pt-[200px] ">
        <div className="supp456:w-[400px] supp1274:w-[550px] w-[250px] border-[4px] border-black h-[230px] my-0 mx-auto  rounded-[50%] flex items-center justify-center">
            <span ref={titreContainerQuatre} className="supp456:text-[55px] supp1274:text-[70px] text-[35px] font-bold text-bleuGris transform translate-y-[-200%] opacity-0 ">
                Why Us?
            </span>
        </div>
        <div className="supp1274:h-[180px] h-[100px] w-[3px] bg-black my-0 mx-auto ">
         
        </div>
        <div className="supp456:h-[1150px] supp1274:w-[1200px] h-[1000px] w-[90%] border-[4px] border-bleuGris my-0 mx-auto rounded-[30px] ">
            <div ref={containerTitrePageQuatre} className="supp456:h-[50%] supp610:h-[30%] supp1061:h-[25%] supp1061:flex-row  h-[65%] w-full flex flex-col items-center justify-evenly border-b-[2px] border-b-bleuGris ">
                <p ref={containerContenuTitrePageQuatre} className="supp456:px-[25px] supp456:py-[10px] supp456:w-[90%] supp456:text-[40px] supp1061:text-[60px] supp1274:h-full supp1274:w-[50%] supp1274:text-[80px] text-[35px] w-full py-[80px] px-0 h-[40%] transform translate-y-[-100%] text-center tracking-[2px] opacity-0">
                    <span className='font-bold text-bleuGris '>Modern tech,</span> <br/>
                    <span className='fontUi text-bleuGris '>human</span> 
                    <span className='font-bold text-bleuGris '>touch</span>
                </p>
                <p ref={containerContenuTextePageQuatre} className="fontUi supp456:text-[15px] supp456:px-10px supp456:py-[35px] supp1061:w-[50%] supp1061:h-[100%] supp1274:text-[18px] supp1274:px-[50px] text-[13px] py-0 px-[10px] h-[70%] w-[90%] transform translate-y-[-100%] leading-[28px] tracking-[1px] font-medium text-bleuGris opacity-0">
                    Human touch and meticulous curation will forever be our trademark. But we've also 
                    tapped our past industry/maker knowledge to create a customized intelligent talent 
                    platform. Featuring automated profile suggestions, smart reminders, diversity filters, 
                    and more. Ten years and 20,000+ entries, all entered by hand, and growing.
                </p>

            </div>
            <div className="supp456:h-[50%] supp610:h-[75%] supp1274:items-end h-[35%] flex justify-center items-center w-full pb-[2px] ">
                <video className='w-[93%] '   loop={true} autoPlay controls muted={true} id="videoContainerQuatre" >
                    <source src="//videos.ctfassets.net/1wmnm7ky08ew/7Jtk3NMhrt4xrJYFjUuylU/d8917d3da2b3befd60a4ce942da2109c/01_Roldx_Demo_1920_v03_mk_s3.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
        <div ref={containPrincipaleDeuxPQuatre} className="my-0 mx-auto mt-[300px] rounded-[30px] relative ">
        </div>
    </div>
  )
}
