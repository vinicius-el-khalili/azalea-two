import style from "../slider.module.scss"

const SliderCard = ({
    content,
    cardNumber,
    currentCard
}) => {

    return ( 
        <>
        
        <div
        className={
            cardNumber !== currentCard 
            ?
            `${style.cardContainer} ${style.minimizeCard}` 
            :
            style.cardContainer }>
            
            {content}
        </div>
        
        </>
     );
}
 
export default SliderCard;