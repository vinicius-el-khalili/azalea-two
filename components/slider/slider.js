import style from "./slider.module.scss"

import { useState } from "react";

import SliderCard from "./sliderCard/sliderCard";
import SliderButton from "./sliderButton.js/sliderButton";
import SliderBar from "./sliderBar/sliderBar";

const Slider = () => {
    
    const [currentCard,setCurrentCard] = useState(0)
    const numberOfCards = 5
    const miniCardWidth = 120

    function handleSlideButtonClick(side){

        if (side === "right"){
            if(currentCard+1 < numberOfCards){
                setCurrentCard(currentCard+1)
            }
        }else{
            if (currentCard-1 >= 0){
                setCurrentCard(currentCard-1)
            }
        }
    }

    return ( 

        <div className={style.mainLayout}>
        
            <SliderButton side={"left"} handleSlideButtonClick={handleSlideButtonClick}/>
            <div
            className={style.frame}>

                <div 
                className={style.cardCollectionContainer}
                style={{
                    transform: `translateX(-${currentCard*miniCardWidth}px)`,
                    transition: ".3s"
                }}>

                    <SliderCard content={"Card #1"} cardNumber={0} currentCard={currentCard} />
                    <SliderCard content={"Card #2"} cardNumber={1} currentCard={currentCard} />
                    <SliderCard content={"Card #3"} cardNumber={2} currentCard={currentCard} />
                    <SliderCard content={"Card #4"} cardNumber={3} currentCard={currentCard} />
                    <SliderCard content={"Card #5"} cardNumber={4} currentCard={currentCard} />
                
                </div>
            </div>
            <SliderButton side={"right"} handleSlideButtonClick={handleSlideButtonClick}/>
            <SliderBar numberOfCards={numberOfCards} currentCard={currentCard}/>

        </div>

     );
}
 
export default Slider;