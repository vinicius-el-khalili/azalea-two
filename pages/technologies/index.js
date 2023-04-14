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
            <div className={style.iconsContainer}>
                <NeonSVG target={"css"} shadowColor={"#33a9ec"}/>
                <NeonSVG target={"html"} shadowColor={"#F16529"}/>
                <NeonSVG target={"javascript"} shadowColor={"white"}/>
                <NeonSVG target={"react"} shadowColor={"blue"}/>
                <NeonSVG target={"sass"} shadowColor={"magenta"}/>
                <NeonSVG target={"next"} shadowColor={"lightblue"}/>
                <NeonSVG target={"node"} shadowColor={"darkgreen"}/>
                <NeonSVG target={"mongodb"} shadowColor={"darkgreen"}/>
                <NeonSVG target={"typescript"} shadowColor={"#007ACC"}/>
            
            </div>
        </div>
        
        </>
    );
}
 
export default Technologies;