
export default function onclickSkill (boolAnim,btnAnim,firstSpan,secondSpan,setboolAnim){
       
        if(boolAnim){
            return;
        }
        
        const titreSouligne=document.querySelectorAll('.titreSouligne');
        const titreCache=document.querySelectorAll('.titreCache');

        btnAnim.current.classList.add('animDroiteGaucheContainer2');
        btnAnim.current.classList.remove('animGaucheDroiteContainer2');
        btnAnim.current.textContent="";
        firstSpan.current.style.opacity ="0";
        secondSpan.current.style.opacity ="1";

        setTimeout(() => {
                btnAnim.current.textContent = "The Skills";
        }, 200);

        
         titreSouligne.forEach(element => {
            element.classList.remove("animTitreSouligneDescend");
            element.classList.add("animTitreSouligneMonter");
        });
        
        titreCache.forEach(element => {
            element.classList.remove("animTitreCacheSouligneMonter");
            element.classList.add("animTitreSouligneCacheDescend");
        });
        
        setboolAnim(!boolAnim);
    }