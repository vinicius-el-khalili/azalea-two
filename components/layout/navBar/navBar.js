import NavButton from "./navButton/navButton"
import NavMenuButton from "./NavMenuButton/NavMenuButton";
import { useContext, useState } from "react";
import AppContext from "@/context/AppContext";
import style from "./navBar.module.scss"

const NavBar = () => {
    const context = useContext(AppContext)
    const [navMenu,setNavMenu] = useState(true)
    return (
        <>

        <div
        className={
            `${style.navBarContainer} ${navMenu? style.on:style.off }`
        }
        style={context.layoutStyleMap.buttonsContainerStyle[context.state.page]}>
        
            {
                context.layoutStyleMap.pages.map( page => (
                    <NavButton page={page} key={"navbutton_"+page}/>
                    ))
            }
        </div>
        <NavMenuButton navMenu={navMenu} setNavMenu={setNavMenu} />

        </>
    );
}
 
export default NavBar;