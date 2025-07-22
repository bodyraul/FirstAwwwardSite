import { useEffect } from "react";

export default function UseAnimScrollVideo(onScroll){
    useEffect(() => {
        window.addEventListener("scroll",onScroll);
    
        return () => {
        window.removeEventListener("scroll",onScroll);
        }
    }, [onScroll])
}