import { useEffect, useRef } from "react";

export default function UseAnimScrollVideo(){
    const titre = useRef("");
    const titreContenu = useRef("");
    const texteContenu = useRef("");

    useEffect(() => {
        const onScroll = ()=>{
            const hauteurContenu = document.getElementsByClassName('animContenuVideo')[0].getBoundingClientRect().top;
            const hauteurEcran = window.innerHeight*78/100;
            if(hauteurContenu<=hauteurEcran){
                titre.current.classList.add('animApparitionTexteContainerQuatre');
                setTimeout(() => {
                    titreContenu.current.classList.add('animApparitionTexteContainerQuatreDeux');
                }, 150);
                setTimeout(() => {
                    texteContenu.current.classList.add('animApparitionTexteContainerQuatreDeux');
                }, 300);
            }
        }

        window.addEventListener("scroll",onScroll);
    
        return () => {
        window.removeEventListener("scroll",onScroll);
        }
    }, [])

    return {titre,titreContenu,texteContenu}
}