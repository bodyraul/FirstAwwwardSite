
export default function onclickUsers(boolAnim,btnAnim,firstSpan,secondSpan,allTitreSouligne,allTitreSouligneCache,setboolAnim){

        if(!boolAnim){
            return;
        }

        btnAnim.current.classList.remove('animDroiteGaucheContainer2');
        btnAnim.current.classList.add('animGaucheDroiteContainer2');
        btnAnim.current.textContent="";
        firstSpan.current.style.opacity ="1";
        secondSpan.current.style.opacity ="0";

         setTimeout(() => {
                btnAnim.current.textContent = "The Users";
        }, 200);

         allTitreSouligne.forEach(element => {
            element.current.classList.remove("animTitreSouligneMonter");
            element.current.classList.add("animTitreSouligneDescend");
        });

        allTitreSouligneCache.forEach(element => {
            element.current.classList.remove("animTitreSouligneCacheDescend");
            element.current.classList.add("animTitreCacheSouligneMonter");
        });

        setboolAnim(!boolAnim);
    }