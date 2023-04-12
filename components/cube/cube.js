import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"
import style from "./cube.module.scss"


const Cube = () => {

    const context = useContext(AppContext)
    return (
    <>

    <div className={style.scene}>        
        <div className={`${style.cube} ${context.layoutStyleMap.cubeRotationMap[context.state.page]}`}>
            <div style={context.layoutStyleMap.cubeFaceStyle[context.state.page]} className={context.layoutStyleMap.cubeFaceClassName["Home"]}><p>Vinicius El Khalili</p><p>Fullstack developer</p></div>
            <div style={context.layoutStyleMap.cubeFaceStyle[context.state.page]} className={context.layoutStyleMap.cubeFaceClassName["Projects"]}>Projects</div>
            <div style={context.layoutStyleMap.cubeFaceStyle[context.state.page]} className={context.layoutStyleMap.cubeFaceClassName["Blog"]}>Blog</div>
            <div style={context.layoutStyleMap.cubeFaceStyle[context.state.page]} className={context.layoutStyleMap.cubeFaceClassName["CV"]}>CV</div>
            <div style={context.layoutStyleMap.cubeFaceStyle[context.state.page]} className={context.layoutStyleMap.cubeFaceClassName["Technologies"]}>Technologies</div>
            <div style={context.layoutStyleMap.cubeFaceStyle[context.state.page]} className={context.layoutStyleMap.cubeFaceClassName["Contact"]}>Contact</div>
        </div>
    </div>

    </>
)} 
export default Cube;