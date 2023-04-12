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
            <CubeFace page={context.layoutStyleMap.pages[0]}>
                <p>Vinicius El Khalili</p>
                <p>Front end developer</p></CubeFace>
            <CubeFace page={context.layoutStyleMap.pages[1]}>{context.layoutStyleMap.pages[1]}</CubeFace>
            <CubeFace page={context.layoutStyleMap.pages[2]}>{context.layoutStyleMap.pages[2]}</CubeFace>
            <CubeFace page={context.layoutStyleMap.pages[3]}>{context.layoutStyleMap.pages[3]}</CubeFace>
            <CubeFace page={context.layoutStyleMap.pages[4]}>{context.layoutStyleMap.pages[4]}</CubeFace>
            <CubeFace page={context.layoutStyleMap.pages[5]}>{context.layoutStyleMap.pages[5]}</CubeFace>
            
        </div>
    </div>

    </>
)} 
export default Cube;