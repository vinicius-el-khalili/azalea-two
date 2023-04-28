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
                    title={"Macumba Jukebox"}
                    description={"A real-life application of a jukebox system for a brewery restaurant. Built with Next.js, FastAPI and ElasticSearch."}
                    links={{img:"/projects/macumba.png",demo:"https://jukebox-dev-r9xp2.vercel.app/profile"}}
                />               
                <ProjectCard
                    title={"Recipe App"}
                    description={"A case-study application that displays different dish recipes and categories. The recipes are stored at a Contentful database, a user-friendly headless content management system."}
                    links={{img:"/projects/catatouille.png",demo:"https://the-catatouille.vercel.app",github:"https://github.com/vinicius-el-khalili/catatouille"}}
                />
                <ProjectCard
                    title={"Jukebox Prototype"}
                    description={"A case-study jukebox prototype insipired by Spotify elements. Built with Next.js and Context API."}
                    links={{img:"/projects/jukeboxPrototype.png",demo:"https://jukebox-prototype-coral.vercel.app",github:"https://github.com/vinicius-el-khalili/jukebox-prototype"}}
                />
                <ProjectCard
                    title={"Responsive Layouts"}
                    description={"Implementation of case-study responsive layouts with Next.js and SASS."}
                    links={{img:"/projects/layouts.jpg",demo:"https://github.com/vinicius-el-khalili/Layouts",github:"https://github.com/vinicius-el-khalili/Layouts"}}
                />
                <ProjectCard
                    title={"Chess board"}
                    description={"A functional chess board built with React class components, TypeScript and 'chess.js' library.\nUsed as a case-study for imperative implementations of React's basic features, like state management and component's life cycle."}
                    links={{img:"/projects/chess.png",demo:"https://vinicius-el-khalili.github.io/Chess-UI-tsc/",github:"https://github.com/vinicius-el-khalili/Chess-UI-tsc"}}
                />
                <ProjectCard
                    title={"Intersection Observers"}
                    description={"Implementation of intersection observers and scroll animations using React hooks and TypeScript."}
                    links={{img:"/projects/reactnn.png",demo:"https://vinicius-el-khalili.github.io/reactnn/",github:"https://github.com/vinicius-el-khalili/reactnn"}}
                />
                <ProjectCard
                    title={"Strange Attractors"}
                    description={"This was my very first project with no tutorials using HTML, CSS and vanilla JavaScript!\nIt features numerical simulations of strange attractors that are displayed on a canvas element.\nThe whole code was written on a single file.\nNo frameworks, no libraries, only good old JavaScript in it's natural habitat."}
                    links={{img:"/projects/attractors.png",demo:"https://vinicius-el-khalili.github.io/attractors/",github:"https://raw.githubusercontent.com/vinicius-el-khalili/attractors/main/index.html"}}
                />
            </div>
        
        </>
    );
}
 
export default Projects;