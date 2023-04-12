import style from "./projects.module.scss"
import { useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";

const Projects = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setSide("Projects")
    },[])
    return (
        <>
        
            <div className={style.pageContainer}>
                <h1>Projects</h1>
            </div>
        
        </>
    );
}
 
export default Projects;