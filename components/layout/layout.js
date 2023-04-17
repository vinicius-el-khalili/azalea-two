import style from "./layout.module.scss"

import NavBar from "./navBar/navBar";
import LayoutContainer from "./layoutContainer/layoutContainer";
import Cube from "../cube/cube";

const Layout = ({children}) => {
    return (
        <>
        
        <LayoutContainer>
            <div className={style.layoutWrapper}>

                <div className={style.navBarWrapper}><NavBar/></div>
                <div className={style.cubeWrapper}><Cube/></div>

                <div className={style.childrenWrapper}>{children}</div>

            </div>
        </LayoutContainer>
        
        </>
    );
}
 
export default Layout;