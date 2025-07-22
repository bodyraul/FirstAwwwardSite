import { useEffect } from "react";
import { useRef } from "react";

export default function UseAnimIntro(){
    const informationGradient =useRef("");
    const fontAleatoire =useRef("");
    const fontSpecialUn =useRef("");
    const fontBasiqueUn =useRef("");
    const containerLogo =useRef("");
    const imgStarRef =useRef("");
    const textDisparitionUn =useRef("");
    const textDisparitionDeux =useRef("");
    const textDisparitionTrois =useRef("");

    useEffect(() => {
    
            const imgStarDelay=()=>{
                setTimeout(() => {
                      imgStarRef.current.classList.add("containerLogoAnim");  
                }, 200);
            }
    
             const fontDelayUn=()=>{
                setTimeout(() => {
                        fontBasiqueUn.current.classList.add("fontAleatoireAnim");
                }, 400);
            }
    
              const fontDelayDeux=()=>{
                setTimeout(() => {
                        fontSpecialUn.current.classList.add("fontAleatoireAnim");
                }, 200);
            }
    
            informationGradient.current.classList.add("informationGradientAnim");
            fontAleatoire.current.classList.add("fontAleatoireAnim");
            containerLogo.current.classList.add("containerLogoAnim");  
            textDisparitionUn.current.classList.add("animCuration");
            textDisparitionDeux.current.classList.add("animBuilding");
            textDisparitionTrois.current.classList.add("animConnecting");
            fontDelayDeux();
            fontDelayUn();
            imgStarDelay();
        
          return () => {
            clearTimeout(fontDelayDeux);
            clearTimeout(fontDelayUn);
            clearTimeout(imgStarDelay);
          }
        }, [])

        return {informationGradient,fontAleatoire,fontSpecialUn,fontBasiqueUn,containerLogo,imgStarRef,textDisparitionUn,textDisparitionDeux,textDisparitionTrois}
}