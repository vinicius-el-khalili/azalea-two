import style from "./layoutContainer.module.scss"
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const LayoutContainer = ({children}) => {
    const context = useContext(AppContext)
    return (
        <>
        
        <div
        className={style.layoutContainer}
        style={context.layoutStyleMap.layoutContainerStyle[context.state.page]}>
        
            {children}
        </div>
        
        </>
    );
}
 
export default LayoutContainer;