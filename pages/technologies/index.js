import Image from "next/image";
import { useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";

import style from "./technologies.module.scss"

import NeonCSS from "./neonIcons/neonCSS";
import NeonSVG from "./neonIcons/neonSVG";

const Technologies = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("Technologies")
    },[])
    return (
        <>
        
        <div className={style.layout}>
            <NeonSVG target={"css"} shadowColor={"#33a9ec"}/>
            <NeonSVG target={"html"} shadowColor={"#F16529"}/>
        </div>
        
        </>
    );
}
 
export default Technologies;