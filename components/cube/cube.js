import { useState } from "react"
import style from "./cube.module.scss"
const Cube = () => {

    const map = {
        "front":style.cube__show__front,
        "back":style.cube__show__back,
        "right":style.cube__show__right,
        "left":style.cube__show__left,
        "top":style.cube__show__top,
        "bottom":style.cube__show__bottom,
    }

    const [side,setSide] = useState("right")
    const randomize = () => {
        let idx = Math.floor(Math.random()*6)
        let sides = ["front","back","right","left","top","bottom"]
        setSide(sides[idx])
    }
    return (
    <>
    <div className={style.scene}>        
        <div className={`${style.cube} ${map[side]}`}>
            <div className={`${style.cube__face} ${style.cube__face__front}`}   >  front</div>
            <div className={`${style.cube__face} ${style.cube__face__back}`}    >   back</div>
            <div className={`${style.cube__face} ${style.cube__face__right}`}   >  right</div>
            <div className={`${style.cube__face} ${style.cube__face__left}`}    >   left</div>
            <div className={`${style.cube__face} ${style.cube__face__top}`}     >    top</div>
            <div className={`${style.cube__face} ${style.cube__face__bottom}`}  > bottom</div>
        </div>
    </div>
    <button onClick={randomize}>ok</button>
    </>
)} 
export default Cube;