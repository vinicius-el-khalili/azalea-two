import Cube from "../cube/cube";
import NavButtonCollection from "../navButton/NavButtonGroup/NavButtonGroup";
import style from "./frameLayout.module.scss"
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const FrameLayout = ({children}) => {
    const context = useContext(AppContext)
    return (
        <>
        
        <div 
        className={style.layoutContainer}
        style={context.layoutStyleMap.layoutContainerStyle[context.state.page]}>

            <div
            className={style.buttonsContainer}
            style={context.layoutStyleMap.buttonsContainerStyle[context.state.page]}>
                <NavButtonCollection/>
            </div>

            <div className={style.pageContainer}>
                <div className={style.cube}>
                    <Cube/>
                </div>
                <div
                className={style.childrenContainer}
                style={context.layoutStyleMap.childrenContainerStyle[context.state.page]}>
                    {children}
                </div>
            </div>

        </div>

        </>
    );
}
 
export default FrameLayout; 