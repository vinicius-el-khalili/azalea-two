import Cube from "../cube/cube";
import NavButtonCollection from "../navButton/NavButtonGroup/NavButtonGroup";
import RC_Head from "./head";
import style from "./layout.module.scss"

const Layout = ({children}) => {
    return (
        <>

        <RC_Head/>        
        <div className={style.layoutContainer}>

            <div className={style.navContainer}>
                <div className={style.cubeContainer}>
                    <Cube/>
                </div>
                <div className={style.buttonsContainer}>
                    <NavButtonCollection/>
                </div>
            </div>

        </div>
        
        </>
    );
}
 
export default Layout;