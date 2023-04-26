import style from "../technologies.module.scss"
import TechCard from "@/components/technologies/TechCard";

const Tools = () => {
    return (
        <>
        
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
        
        </>
    );
}
 
export default Tools;