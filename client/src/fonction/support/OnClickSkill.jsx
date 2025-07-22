
export default function onclickSkill (boolAnim,btnAnim,firstSpan,secondSpan,allTitreSouligne,allTitreSouligneCache,setboolAnim){
       
        if(boolAnim){
            return;
        }

        btnAnim.current.classList.add('animDroiteGaucheContainer2');
        btnAnim.current.classList.remove('animGaucheDroiteContainer2');
        btnAnim.current.textContent="";
        firstSpan.current.style.opacity ="0";
        secondSpan.current.style.opacity ="1";

        setTimeout(() => {
                btnAnim.current.textContent = "The Skills";
        }, 200);

        allTitreSouligne.forEach(element => {
            element.current.classList.remove("animTitreSouligneDescend");
            element.current.classList.add("animTitreSouligneMonter");
        });
        
        allTitreSouligneCache.forEach(element => {
            element.current.classList.remove("animTitreCacheSouligneMonter");
            element.current.classList.add("animTitreSouligneCacheDescend");
        });
        
        setboolAnim(!boolAnim);
    }