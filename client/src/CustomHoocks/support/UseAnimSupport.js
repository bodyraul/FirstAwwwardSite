import { useEffect } from "react";
import { useRef } from "react";

export default function UseAnimSupport(){
    const divTechnologieEntreprise = useRef();
    const supportBtnIntro = useRef();
    const divDesigneBrand = useRef();
    const divManagamentStartup = useRef();
    
    useEffect(() => {
        const scrolling=()=>{
            const tailleEcran = window.innerHeight
            const hauteurDivTechno = divManagamentStartup.current.getBoundingClientRect().top;

            if(hauteurDivTechno<=tailleEcran){
                supportBtnIntro.current.classList.add("affichageSupport");
                divDesigneBrand.current.classList.add("affichageDesign");
                divTechnologieEntreprise.current.classList.add("affichageTechnologie");
                divManagamentStartup.current.classList.add("affichageManagement");
                }
        }
        window.addEventListener("scroll", scrolling);
        return () => {
        window.removeEventListener("scroll", scrolling);
        
        }
    }, )
    return {divTechnologieEntreprise,supportBtnIntro,divDesigneBrand,divManagamentStartup}
}