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
                <div>
                    
                    <h1>Projects</h1>
                    <p>JWT Authentication: Next, Node</p>
                    <p>Catatouille: Next, Contentful, Sass </p>                
                    <p>Jukebox Prototype: Next, Sass </p>
                    <p>Responsive Layouts: Next, Sass </p>
                    <p>Chess board: react, sass</p>
                </div>
            </div>
        
        </>
    );
}
 
export default Projects;