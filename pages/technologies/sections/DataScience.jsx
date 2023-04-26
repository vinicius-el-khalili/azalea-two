import style from "../technologies.module.scss"
import TechCard from "@/components/technologies/TechCard"

const DataScience = () => {
    return (
        <>
        
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
            <TechCard tech={"jupyter"}     title={"Jupyter"}    color={"lightblue"}/>
        </div>
        
        </>
    );
}
 
export default DataScience;