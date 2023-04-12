import Cube from "../cube/cube";
import NavButtonCollection from "../navButton/NavButtonGroup/NavButtonGroup";
import style from "./frameLayout.module.scss"
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const FrameLayout = ({children}) => {
    const context = useContext(AppContext)
    const backgroundColorMap = {
        "Home":         "#F4EEE0",
        "Projects":     "#393646",
        "Blog":         "#393646",
        "CV":           "#393646",
        "Technologies": "#393646",
        "Contact":      "#F4EEE0",
    }
    return (
        <>
        
        <div 
        className={style.layoutContainer}
        style={{backgroundColor:backgroundColorMap[context.state.page]}}>
            <div
            className={style.buttonsContainer}
            style={{borderColor:context.layoutStyleMap.borderColorMap[context.state.page]}}>
                <NavButtonCollection/>
            </div>


            <div className={style.pageContainer}>
                <div className={style.cube}>
                    <Cube/>
                </div>
                <div
                className={style.childrenContainer}
                style={{borderColor:context.layoutStyleMap.borderColorMap[context.state.page]}}>
                    {children}
                </div>
            </div>

        </div>

        </>
    );
}
 
export default FrameLayout; 