import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"
import style from "./cube.module.scss"


const Cube = () => {

    const context = useContext(AppContext)

    const map = {
        "front":style.cube__show__front,
        "back":style.cube__show__back,
        "right":style.cube__show__right,
        "left":style.cube__show__left,
        "top":style.cube__show__top,
        "bottom":style.cube__show__bottom,
    }
    
    const randomize = () => {
        let idx = Math.floor(Math.random()*6)
        let sides = ["front","back","right","left","top","bottom"]
        context.setSide(sides[idx])
    }

    return (
    <>
    <div className={style.scene}>        
        <div className={`${style.cube} ${map[context.state.side]}`}>
            <div className={`${style.cube__face} ${style.cube__face__front}`}   > Home </div>
            <div className={`${style.cube__face} ${style.cube__face__back}`}    > Projects              </div>
            <div className={`${style.cube__face} ${style.cube__face__right}`}   > Blog              </div>
            <div className={`${style.cube__face} ${style.cube__face__left}`}    > CV              </div>
            <div className={`${style.cube__face} ${style.cube__face__top}`}     > Technologies              </div>
            <div className={`${style.cube__face} ${style.cube__face__bottom}`}  > Contact              </div>
        </div>
    </div>
    <div className={style.switch} onClick={randomize}>Switch</div>
    </>
)} 
export default Cube;