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
    const cubeStyleMap = {
        "Home":{
            backgroundColor:"white",
            color:"black",
            border:"2px solid red",
        },
        "Projects":{},
        "Blog":{},
        "CV":{},
        "Technologies":{},
        "Contact":{},
    }
    const cubeFaceClassName = {
        "Home":`${style.cube__face} ${style.cube__face__front}`,
        "Projects":`${style.cube__face} ${style.cube__face__back}`,
        "Blog":`${style.cube__face} ${style.cube__face__right}`,
        "CV":`${style.cube__face} ${style.cube__face__left}`,
        "Technologies":`${style.cube__face} ${style.cube__face__top}`,
        "Contact":`${style.cube__face} ${style.cube__face__bottom}`,
    }
    

    return (
    <>

    <div className={style.scene}>        
        <div className={`${style.cube} ${cubeRotationMap[context.state.page]}`} style={cubeStyleMap[context.state.page]}>
            <div className={cubeFaceClassName["Home"]}>
                <p>Vinicius El Khalili</p>
                <p>Fullstack developer</p>
            </div>
            <div className={cubeFaceClassName["Projects"]}>
                Projects</div>
            <div className={cubeFaceClassName["Blog"]}>
                Blog</div>
            <div className={cubeFaceClassName["CV"]}>
                CV</div>
            <div className={cubeFaceClassName["Technologies"]}>
                Technologies</div>
            <div className={cubeFaceClassName["Contact"]}>
                Contact</div>
        </div>
    </div>

    </>
)} 
export default Cube;