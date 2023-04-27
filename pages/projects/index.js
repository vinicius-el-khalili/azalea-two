import style from "./projects.module.scss"
import { useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";

const Projects = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("Projects")
    },[])
    return (
        <>
        
            <div className={style.projectCards}>
                <ProjectCard
                    title={"Project Card 101"}
                    description={"\tLorem ipsum dolor, sit amet consectetur adipisicing elit.\n\tAmet illum at, excepturi cumque incidunt voluptatibus blanditiis quisquam cupiditate itaque dolorem facilis illo atque, enim error. Illo cupiditate laboriosam, laborum soluta natus aperiam."}
                    links={{demo:"/",github:"/"}}
                />
            </div>
        
        </>
    );
}
 
export default Projects;