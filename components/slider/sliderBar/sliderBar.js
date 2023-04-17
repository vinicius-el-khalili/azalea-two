import style from "../slider.module.scss"

const SliderBar = ({numberOfCards, currentCard}) => {
    const dots = []
    for ( let i=0;i<numberOfCards;i++ ){ dots.push(
        <div className={

            i === currentCard
            ?
            `${style.dot} ${style.dotHighlight}`
            :
            `${style.dot}`


        } />
    )}
    console.log(dots)
    return ( 
        <>
        
        <div className={style.slideBar}>
            {dots}
        </div>
        
        </>
     );
}
export default SliderBar;