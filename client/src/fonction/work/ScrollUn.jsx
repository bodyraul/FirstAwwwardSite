export default function scrollUn(){
    const introText = document.querySelector('.introText');
    const barAnim = document.querySelectorAll('.barre');
    let tailleEcran = window.innerHeight;
    let situerEnteteTroisemeContainer = introText.getBoundingClientRect().top;
    
    if(situerEnteteTroisemeContainer>=tailleEcran*75/100){
        barAnim.forEach(element => {
            element.style.height="0px";
            element.classList.remove('animBarreTroisiemeContainer');
            element.classList.add('animBarreTroisiemeContainerDeux');
        });
        
    }

    if(situerEnteteTroisemeContainer<=tailleEcran*75/100){
        barAnim.forEach(element => {
            element.style.height="3px";
            element.classList.remove('animBarreTroisiemeContainerDeux');
            element.classList.add('animBarreTroisiemeContainer');
        });
        
    }
}