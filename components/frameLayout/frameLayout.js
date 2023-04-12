import Cube from "../cube/cube";
import NavButtonCollection from "../navButton/NavButtonGroup/NavButtonGroup";
import style from "./frameLayout.module.scss"

const FrameLayout = ({children}) => {
    return (
        <>
        
        <div className={style.layoutContainer}>

            <div className={style.buttonsContainer}>
                <NavButtonCollection/>
            </div>


            <div className={style.pageContainer}>
                <div className={style.cube}>
                    <Cube/>
                </div>

                <div className={style.childrenContainer}>
                    {children}
                </div>
            </div>
        </div>


        </>
    );
}
 
export default FrameLayout; 