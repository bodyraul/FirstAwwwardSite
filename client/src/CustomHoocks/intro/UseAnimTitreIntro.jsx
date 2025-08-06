import { useEffect } from "react";
import { useRef } from "react";

export default function UseAnimIntro(){
    const fontAleatoire =useRef("");
    const fontSpecialUn =useRef("");
    const fontBasiqueUn =useRef("");
    const textDisparitionUn =useRef("");
    const textDisparitionDeux =useRef("");
    const textDisparitionTrois =useRef("");

    useEffect(() => {
    
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
    
        fontAleatoire.current.classList.add("fontAleatoireAnim"); 
        textDisparitionUn.current.classList.add("animCuration");
        textDisparitionDeux.current.classList.add("animBuilding");
        textDisparitionTrois.current.classList.add("animConnecting");
        fontDelayDeux();
        fontDelayUn();
    
          return () => {
            clearTimeout(fontDelayDeux);
            clearTimeout(fontDelayUn);
          }
        }, [])

        return {fontAleatoire,fontSpecialUn,fontBasiqueUn,textDisparitionUn,textDisparitionDeux,textDisparitionTrois}
}