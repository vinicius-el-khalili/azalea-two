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
        
            <h1>Projects</h1>
        
        </>
    );
}
 
export default Projects;