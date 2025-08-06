import { useEffect } from "react";
import { useRef } from "react";

export default function UseAnimContenuIntro(){
    const informationGradient =useRef("");

    useEffect(() => {
        informationGradient.current.classList.add("informationGradientAnim");
        }, [])

        return {informationGradient}
}