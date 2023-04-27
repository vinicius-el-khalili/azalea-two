import style from "./layout.module.scss"

import NavBar from "./navBar/navBar";
import LayoutContainer from "./layoutContainer/layoutContainer";
import Cube from "../cube/cube";

import { useContext } from "react";
import AppContext from "@/context/AppContext";

const Layout = ({children}) => {
    const context = useContext(AppContext)
    return (
        <>
        
        <LayoutContainer>
            <div className={style.layoutWrapper}>

                <div className={style.navBarWrapper}>
                    <NavBar/></div>

                <div className={style.cubeWrapper}>
                    <Cube/></div>

                <div
                className={style.childrenWrapper}
                style={context.layoutStyleMap.childrenWrapperStyle[context.state.page]}
                >
                    {children}</div>

            </div>
        </LayoutContainer>
        
        </>
    );
}
 
export default Layout;