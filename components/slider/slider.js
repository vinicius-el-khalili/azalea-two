import SliderCard from "./sliderCard/sliderCard";
import style from "./slider.module.scss"

const Slider = () => {
    
    
    return ( 

        <>
        
        <div className={style.sliderContainer}>

            <SliderCard content={"Card #1"}/>
            <SliderCard content={"Card #2"}/>
            <SliderCard content={"Card #3"}/>

        </div>

        </>

     );
}
 
export default Slider;