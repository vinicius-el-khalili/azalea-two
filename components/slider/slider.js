import style from "./slider.module.scss"

import { useState } from "react";

import SliderCard from "./sliderCard/sliderCard";
import SliderButton from "./sliderButton.js/sliderButton";

const Slider = () => {
    
    const [currentCard,setCurrentCard] = useState(1)

    return ( 

        <>
        
        <SliderButton side={"left"}/>


        <div className={style.sliderContainer}>

            <SliderCard content={"Card #1"} cardNumber={0} currentCard={currentCard} />
            <SliderCard content={"Card #2"} cardNumber={1} currentCard={currentCard} />
            <SliderCard content={"Card #3"} cardNumber={2} currentCard={currentCard} />

        </div>

        <SliderButton side={"right"}/>
        
        </>

     );
}
 
export default Slider;