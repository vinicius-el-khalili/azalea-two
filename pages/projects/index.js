import style from "./projects.module.scss"
import { useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";

const Projects = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("Projects")
    },[])
    return (
        <>
        
            <div className={style.pageContainer}>
                <h1>Projects</h1>
                <p>Catatouille: Next, Contentful, Sass </p>                
                <p>Jukebox Prototype: Next, Sass </p>
                <p>Responsive Layouts: Next, Sass </p>
                <p>Chess board: react, sass</p>
                
            </div>
        
        </>
    );
}
 
export default Projects;