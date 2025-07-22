
export default function scrollAnimVideo(containerTitrePageQuatre,titreContainerQuatre,containerContenuTitrePageQuatre,containerContenuTextePageQuatre,containerImg){
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
        setTimeout(() => {
            containerImg.current.classList.add('animApparitionimgVideo');
        }, 600);
    }
}