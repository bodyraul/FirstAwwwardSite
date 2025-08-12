import { useEffect } from "react";
import { useRef } from "react";

export default function UseAnimSupport(){
    const divTechnologieEntreprise = useRef();
    const titreBtn = useRef();
    const divDesigneBrand = useRef();
    const divManagamentStartup = useRef();
    const btn=useRef();
    
    useEffect(() => {
        const scrolling=()=>{
            const tailleEcran = window.innerHeight
            const hauteurDivTechno = divManagamentStartup.current.getBoundingClientRect().top;

            if(hauteurDivTechno<=tailleEcran){
                titreBtn.current.classList.add("affichageSupport");
                divDesigneBrand.current.classList.add("affichageCreation");
                divTechnologieEntreprise.current.classList.add("affichageInnovation");
                divManagamentStartup.current.classList.add("affichageLeadership");
                btn.current.classList.add("affichageBtn");
                }
        }
        window.addEventListener("scroll", scrolling);
        return () => {
        window.removeEventListener("scroll", scrolling);
        
        }
    }, )
    return {divTechnologieEntreprise,titreBtn,divDesigneBrand,divManagamentStartup,btn}
}