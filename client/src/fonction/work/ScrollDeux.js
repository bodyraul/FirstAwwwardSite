export default function scrollDeux(){
    const allSousDiv =document.querySelectorAll('.allSousDiv');
    let tailleEcran = window.innerHeight;

    allSousDiv.forEach(element => {
        if(element.getBoundingClientRect().top<=tailleEcran*60/100){
            element.classList.add('animSousDiv');
        }
    });

}