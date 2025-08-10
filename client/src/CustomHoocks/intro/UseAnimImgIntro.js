import { useEffect } from "react";
import { useRef } from "react";

export default function UseAnimImgIntro(){

    const containerLogo =useRef("");
    const imgStarRef =useRef("");

    useEffect(() => {
  
      const imgStarDelay=()=>{
          setTimeout(() => {
                imgStarRef.current.classList.add("containerLogoAnim");  
          }, 200);
      }
  
      containerLogo.current.classList.add("containerLogoAnim");  
      imgStarDelay();
    
      return () => {
        clearTimeout(imgStarDelay);
      }
    }, [])

    return {containerLogo,imgStarRef}
}