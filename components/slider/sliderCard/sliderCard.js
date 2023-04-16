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
            cardNumber === currentCard 
            ?
            `${style.cardContainer} ${style.mainCard}`
            :
                cardNumber === currentCard+1 || cardNumber === currentCard-1
                ?
                `${style.cardContainer} ${style.minimizeCard}`
                :
                `${style.cardContainer} ${style.invisible} ${style.minimizeCard}`
            }>
            
            {content}
        </div>
        
        </>
     );
}
 
export default SliderCard;