import { useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";

import style from "./technologies.module.scss"

import NeonSVG from "@/components/neonSVG/neonSVG";
import TechCard from "@/components/technologies/TechCard";

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
                <TechCard color={"orange"}  tech={"html"} title={"HTML"}/>
                <TechCard color={"#33a9ec"} tech={"css"} title={"CSS"}/>
                <TechCard color={"yellow"}  tech={"javascript"} title={"JavaScript"}/>
                <TechCard color={"blue"}    tech={"react"} title={"React"}/>
                <TechCard color={"magenta"} tech={"sass"} title={"Sass"}/>
                <TechCard color={"white"}   tech={"next"} title={"Next"}/>
            </div>
            
            
            <h1 className={style.header}>
                Back end
            </h1>
            <div className={style.iconsContainer}>
                <TechCard tech={"mongodb"} title = {"MongoDB"} color={"darkgreen"}/>
                <TechCard tech={"node"}    title = {"Node"} color={"darkgreen"}/>
                <TechCard tech={"express"} title = {"Express"} color={"green"}/>
            </div>


            <h1 className={style.header}>
                Tools
            </h1>
            <div className={style.iconsContainer}>
                <TechCard tech={"postman"}     title = {"Postman"} color={"orange"}/>
                <TechCard tech={"typescript"}  title = {"Typescript"} color={"#007ACC"}/>
                <TechCard tech={"figma"}       title = {"Figma"} color={"salmon"}/>
                <TechCard tech={"git"}         title = {"Git"} color={"white"}/>
                <TechCard tech={"github"}      title = {"Github"} color={"white"}/>
                <TechCard tech={"docker"}      title = {"Docker"} color={"lightblue"}/>
            </div>

            <h1 className={style.header}>
                Data Science
            </h1>

            <div className={style.iconsContainer}>
                <TechCard tech={"python"}      title={"Python"}      color={"lightblue"}/>
                <TechCard tech={"scipy"}       title={"SciPy"}       color={"lightblue"}/>
                <TechCard tech={"numpy"}       title={"Numpy"}       color={"lightblue"}/>
                <TechCard tech={"pandas"}      title={"Pandas"}      color={"lightblue"}/>
                <TechCard tech={"scikitlearn"} title={"Scikit-Learn"} color={"lightblue"}/>
                <TechCard tech={"matplotlib"}  title={"Matplotlib"}  color={"lightblue"}/>
                <TechCard tech={"jupyter"}     title={"Jupyter"}  color={"lightblue"}/>
            </div>

        </div>
        
        </>
    );
}
 
export default Technologies;