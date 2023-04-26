import style from "./sandbox.module.scss"
import Slider from "@/components/slider/slider";

const Sandbox = () => {
    return ( 
        <div className={style.sandboxWrapper}>
        
            <Slider childrenList={[
                (<h1>#1</h1>),
                (<h1>#2</h1>),
                (<h1>#3</h1>),
            ]}/>

        </div>
     );
}
 
export default Sandbox;