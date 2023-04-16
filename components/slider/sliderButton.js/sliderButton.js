import style from "../slider.module.scss"

const SliderButton = ({ side, handleSlideButtonClick }) => {
    return ( 
        <>

        <div 
        className = {
            side === "right" ?
            `${style.sliderButton} ${style.right}` :
            `${style.sliderButton} ${style.left}`
            } 
        onClick={ ()  => { handleSlideButtonClick(side) } }
        />

        </>
     );
}
 
export default SliderButton;