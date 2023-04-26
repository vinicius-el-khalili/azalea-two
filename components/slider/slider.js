import style from "./slider.module.scss"

import { useState } from "react";

import SliderCard from "./sliderCard/sliderCard";
import SliderButton from "./sliderButton.js/sliderButton";
import SliderBar from "./sliderBar/sliderBar";

import TechCard from "../technologies/TechCard";

const Slider = ({childrenList}) => {
    
    const [currentCard,setCurrentCard] = useState(0)
    const numberOfCards = childrenList.length
    const cards = []
    for (let i=0;i<numberOfCards;i++){
        cards.push(<SliderCard key={`sc_${i}`} cardNumber={i} currentCard={currentCard}>{childrenList[i]}</SliderCard>)
    }
    const miniCardWidth = 120

    function handleSlideButtonClick(side){

        if (side === "right"){
            if(currentCard+1 < numberOfCards){setCurrentCard(currentCard+1)}
            }else{ if (currentCard-1 >= 0){setCurrentCard(currentCard-1) }
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

                {cards}
                
                </div>
            </div>
            <SliderButton side={"right"} handleSlideButtonClick={handleSlideButtonClick}/>
            <SliderBar numberOfCards={numberOfCards} currentCard={currentCard}/>

        </div>

     );
}
 
export default Slider;