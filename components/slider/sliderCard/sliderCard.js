import style from "./sliderCard.module.scss"

const SliderCard = ({content}) => {
    return ( 
        <>
        
        <div className={style.cardContainer}>{content}</div>
        
        </>
     );
}
 
export default SliderCard;