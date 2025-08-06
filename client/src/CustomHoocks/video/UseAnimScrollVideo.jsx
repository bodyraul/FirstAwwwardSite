import { useEffect, useRef } from "react";

export default function UseAnimScrollVideo(){
    const titre = useRef("");
    const divContenu = useRef("");
    const titreContenu = useRef("");
    const texteContenu = useRef("");
    const img = useRef("");

    useEffect(() => {
        const onScroll = ()=>{
            const hauteurEcran = window.innerHeight*78/100;
            const hauteurDivContainerQuatre = divContenu.current.getBoundingClientRect().top;
            if(hauteurDivContainerQuatre<=hauteurEcran){
                titre.current.classList.add('animApparitionTexteContainerQuatre');
                setTimeout(() => {
                    titreContenu.current.classList.add('animApparitionTexteContainerQuatreDeux');
                }, 150);
                setTimeout(() => {
                    texteContenu.current.classList.add('animApparitionTexteContainerQuatreDeux');
                }, 300);
                setTimeout(() => {
                    img.current.classList.add('animApparitionimgVideo');
                }, 600);
            }
        }

        window.addEventListener("scroll",onScroll);
    
        return () => {
        window.removeEventListener("scroll",onScroll);
        }
    }, [])

    return {titre,divContenu,titreContenu,texteContenu,img}
}