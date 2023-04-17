import style from "./sandbox.module.scss"
import Slider from "@/components/slider/slider";

const Sandbox = () => {
    return ( 
        <div className={style.sandboxWrapper}>
        
            <Slider/>

        </div>
     );
}
 
export default Sandbox;