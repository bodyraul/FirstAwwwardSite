import { useEffect } from "react";
import scrollUn from "../../fonction/work/ScrollUn";
import scrollDeux from "../../fonction/work/ScrollDeux";

export default function UseAnimScrollWork(){

    useEffect(() => {
            window.addEventListener('scroll',scrollUn);
            window.addEventListener('scroll',scrollDeux);

            return () => {
            window.removeEventListener('scroll',scrollUn);
            window.removeEventListener('scroll',scrollDeux);
            }
        }, [])
        
}