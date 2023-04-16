import Image from "next/image";
import { useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";

import style from "./technologies.module.scss"

import NeonSVG from "@/components/neonSVG/neonSVG";

const Technologies = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("Technologies")
    },[])
    return (
        <>
        
        <div className={style.layout}>
            
            <h1 className={style.header}>
                Front end
            </h1>
            <div className={style.iconsContainer}>
                <NeonSVG target={"html"} shadowColor={"#F16529"}/>
                <NeonSVG target={"css"} shadowColor={"#33a9ec"}/>
                <NeonSVG target={"javascript"} shadowColor={"yellow"}/>
                <NeonSVG target={"react"} shadowColor={"blue"}/>
                <NeonSVG target={"sass"} shadowColor={"magenta"}/>
                <NeonSVG target={"next"} shadowColor={"white"}/>
            </div>
            
            
            <h1 className={style.header}>
                Back end
            </h1>
            <div className={style.iconsContainer}>
                <NeonSVG target={"node"}    shadowColor={"darkgreen"}/>
                <NeonSVG target={"mongodb"} shadowColor={"darkgreen"}/>
                <NeonSVG target={"express"} shadowColor={"green"}/>
            </div>


            <h1 className={style.header}>
                Dev Tools
            </h1>
            <div className={style.iconsContainer}>
                <NeonSVG target={"typescript"}  shadowColor={"#007ACC"}/>
                <NeonSVG target={"postman"}     shadowColor={"orange"}/>
                <NeonSVG target={"figma"}       shadowColor={"salmon"}/>
            </div>

            <h1 className={style.header}>
                Data Science
            </h1>
            <div className={style.iconsContainer}>
                <NeonSVG target={"python"}      shadowColor={"white"}/>
                <NeonSVG target={"scipy"}       shadowColor={"white"}/>
                <NeonSVG target={"numpy"}       shadowColor={"white"}/>
                <NeonSVG target={"pandas"}      shadowColor={"white"}/>
                <NeonSVG target={"scikitlearn"} shadowColor={"white"}/>
                <NeonSVG target={"matplotlib"}  shadowColor={"white"}/>
            </div>

        </div>
        
        </>
    );
}
 
export default Technologies;