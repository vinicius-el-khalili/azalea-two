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
                    title={"Recipe App"}
                    description={"A website that displays different dish recipes and categories. The recipes are stored at a Contentful database, a user-friendly headless content management system."}
                    links={{img:"/projects/catatouille.png",demo:"https://the-catatouille.vercel.app",github:"https://github.com/vinicius-el-khalili/catatouille"}}
                />
                <ProjectCard
                    title={"Jukebox"}
                    description={"A simple jukebox insipired by Spotify elements. Built with Next.js as a case-study for the Context API."}
                    links={{img:"/projects/jukeboxPrototype.png",demo:"https://jukebox-prototype-coral.vercel.app",github:"https://github.com/vinicius-el-khalili/jukebox-prototype"}}
                />
                <ProjectCard
                    title={"Responsive Layouts"}
                    description={"Implementation of case-study responsive layouts with Next.js and SASS."}
                    links={{img:"/projects/layouts.jpg",demo:"https://github.com/vinicius-el-khalili/Layouts",github:"https://github.com/vinicius-el-khalili/Layouts"}}
                />
                <ProjectCard
                    title={"Chess board"}
                    description={"A functional chess board built with React class components, TypeScript and 'chess.js' library, as a case-study for less declarative implementations of React component functionalities."}
                    links={{img:"/projects/chess.png",demo:"https://vinicius-el-khalili.github.io/Chess-UI-tsc/",github:"https://github.com/vinicius-el-khalili/Chess-UI-tsc"}}
                />
            </div>
        
        </>
    );
}
 
export default Projects;