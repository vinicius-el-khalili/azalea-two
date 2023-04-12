import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"
import style from "./cube.module.scss"
import CubeFace from "./cubeFace"


const Cube = () => {
    const context = useContext(AppContext)
    return (
    <>

    <div className={style.scene}>        
        <div className={`${style.cube} ${context.layoutStyleMap.cubeRotationMap[context.state.page]}`}>
            <CubeFace page={"Home"}> <p>Vinicius El Khalili</p><p>Front end developer</p> </CubeFace>
            <CubeFace page={"Projects"}>Projects</CubeFace>
            <CubeFace page={"Blog"}>Blog</CubeFace>
            <CubeFace page={"CV"}>CV</CubeFace>
            <CubeFace page={"Technologies"}>Technologies</CubeFace>
            <CubeFace page={"Contact"}>Contact</CubeFace>
            
        </div>
    </div>

    </>
)} 
export default Cube;