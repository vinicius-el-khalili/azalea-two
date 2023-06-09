import style from "../slider.module.scss"

const SliderCard = ({
    children,
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
                    cardNumber === currentCard+1
                    ?
                    `${style.cardContainer} ${style.minimizeCard} ${style.minimizeRight}`
                    :
                    `${style.cardContainer} ${style.minimizeCard} ${style.minimizeLeft}`
                :
                    `${style.cardContainer} ${style.invisible} ${style.minimizeCard}`
            }>
            
            {children}
        </div>
        
        </>
     );
}
 
export default SliderCard;