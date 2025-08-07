
export default function onclickUsers(boolAnim,btnAnim,firstSpan,secondSpan,setboolAnim){

        if(!boolAnim){
            return;
        }
        const titreSouligne=document.querySelectorAll('.titreSouligne');
        const titreCache=document.querySelectorAll('.titreCache');

        btnAnim.current.classList.remove('animDroiteGaucheContainer2');
        btnAnim.current.classList.add('animGaucheDroiteContainer2');
        btnAnim.current.textContent="";
        firstSpan.current.style.opacity ="1";
        secondSpan.current.style.opacity ="0";

         setTimeout(() => {
                btnAnim.current.textContent = "The Users";
        }, 200);

         titreSouligne.forEach(element => {
            element.classList.remove("animTitreSouligneMonter");
            element.classList.add("animTitreSouligneDescend");
        });

        titreCache.forEach(element => {
            element.classList.remove("animTitreSouligneCacheDescend");
            element.classList.add("animTitreCacheSouligneMonter");
        });

        setboolAnim(!boolAnim);
    }