import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"
import style from "./cube.module.scss"


const Cube = () => {

    const context = useContext(AppContext)
    const cubeRotationMap = {
        "Home":style.cube__show__front,
        "Projects":style.cube__show__back,
        "Blog":style.cube__show__right,
        "CV":style.cube__show__left,
        "Technologies":style.cube__show__top,
        "Contact":style.cube__show__bottom,
    }
    const cubeFaceClassName = {
        "Home":`${style.cube__face} ${style.cube__face__front}`,
        "Projects":`${style.cube__face} ${style.cube__face__back}`,
        "Blog":`${style.cube__face} ${style.cube__face__right}`,
        "CV":`${style.cube__face} ${style.cube__face__left}`,
        "Technologies":`${style.cube__face} ${style.cube__face__top}`,
        "Contact":`${style.cube__face} ${style.cube__face__bottom}`,
    }
    const cubeFaceStyle = {
        "Home":{
            backgroundColor:"white",
            color:"black",
            border:"2px solid black"
        },
        "Projects":{
            backgroundColor:"#17C3B2",
            color:"black"
        },
        "Blog":{
            backgroundColor:"#F5853F",
            color:"black"
        },
        "CV":{
            backgroundColor:"#5F00BA",
            color:"white"
        },
        "Technologies":{
            backgroundColor:"#BA274A",
            color:"white"
        },
        "Contact":{
            backgroundColor:"#275DAD",
            color:"white"
        },
    }

    return (
    <>

    <div className={style.scene}>        
        <div className={`${style.cube} ${context.layoutStyleMap.cubeRotationMap[context.state.page]}`}>
            <div style={cubeFaceStyle[context.state.page]} className={cubeFaceClassName["Home"]}><p>Vinicius El Khalili</p><p>Fullstack developer</p></div>
            <div style={cubeFaceStyle[context.state.page]} className={cubeFaceClassName["Projects"]}>Projects</div>
            <div style={cubeFaceStyle[context.state.page]} className={cubeFaceClassName["Blog"]}>Blog</div>
            <div style={cubeFaceStyle[context.state.page]} className={cubeFaceClassName["CV"]}>CV</div>
            <div style={cubeFaceStyle[context.state.page]} className={cubeFaceClassName["Technologies"]}>Technologies</div>
            <div style={cubeFaceStyle[context.state.page]} className={cubeFaceClassName["Contact"]}>Contact</div>
        </div>
    </div>

    </>
)} 
export default Cube;