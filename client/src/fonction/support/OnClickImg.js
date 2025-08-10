export default function onclickImg(boolInfo,affichageInformation,setboolInfo){
        if(boolInfo){
            affichageInformation.current.style.opacity="1";
            setboolInfo(!boolInfo);
        }
         if(!boolInfo){
            affichageInformation.current.style.opacity="0";
            setboolInfo(!boolInfo);
        }
    }