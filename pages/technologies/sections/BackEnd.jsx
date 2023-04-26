import style from "../technologies.module.scss"
import TechCard from "@/components/technologies/TechCard";

const BackEnd = () => {
    return (
        <>
        
        <h1 className={style.header}>
            Back end
        </h1>
        <div className={style.iconsContainer}>
            <TechCard tech={"mongodb"} title = {"MongoDB"} color={"darkgreen"}/>
            <TechCard tech={"node"}    title = {"Node"} color={"darkgreen"}/>
            <TechCard tech={"express"} title = {"Express"} color={"green"}/>
        </div>
        
        </>
    );
}
 
export default BackEnd;