import NavButton from "./navButton/navButton"
import { useContext } from "react";
import AppContext from "@/context/AppContext";
import style from "./navBar.module.scss"

const NavBar = () => {
    const context = useContext(AppContext)
    return (
        <>

        <div
        className={style.navBarContainer}
        style={context.layoutStyleMap.buttonsContainerStyle[context.state.page]}>
    
            {
                context.layoutStyleMap.pages.map( page => (
                    <NavButton page={page} key={"navbutton_"+page}/>
                    ))
            }
        
        </div>

        </>
    );
}
 
export default NavBar;