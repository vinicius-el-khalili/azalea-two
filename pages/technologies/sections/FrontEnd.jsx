import style from "../technologies.module.scss"
import TechCard from "@/components/technologies/TechCard";

const FrontEnd = () => {
    return (
        <>
        
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
        
        </>
    );
}
 
export default FrontEnd;