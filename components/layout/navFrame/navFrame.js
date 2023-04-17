import style from "../layout.module.scss"
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const NavFrame = ({children}) => {
    const context = useContext(AppContext)
    return (
        <>
        
        <div
        className={style.childrenContainer}
        style={context.layoutStyleMap.childrenContainerStyle[context.state.page]}>
        
            {children}
        </div>
        
        </>
    );
}
 
export default NavFrame;