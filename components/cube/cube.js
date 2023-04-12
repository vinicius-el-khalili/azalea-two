import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"
import style from "./cube.module.scss"


const Cube = () => {

    const context = useContext(AppContext)

    const page_side_Map = {
        "Home":style.cube__show__front,
        "Projects":style.cube__show__back,
        "Blog":style.cube__show__right,
        "CV":style.cube__show__left,
        "Technologies":style.cube__show__top,
        "Contact":style.cube__show__bottom,
    }

    return (
    <>

    <div className={style.scene}>        
        <div className={`${style.cube} ${page_side_Map[context.state.page]}`}>
            <div className={`${style.cube__face} ${style.cube__face__front}`}>
                <p>Vinicius El Khalili</p>
                <p>Fullstack developer</p>
            </div>
            <div className={`${style.cube__face} ${style.cube__face__back}`}>
                Projects
            </div>
            <div className={`${style.cube__face} ${style.cube__face__right}`}>
                Blog
            </div>
            <div className={`${style.cube__face} ${style.cube__face__left}`}>
                CV
            </div>
            <div className={`${style.cube__face} ${style.cube__face__top}`}>
                Technologies
            </div>
            <div className={`${style.cube__face} ${style.cube__face__bottom}`}>
                Contact
            </div>
        </div>
    </div>

    </>
)} 
export default Cube;