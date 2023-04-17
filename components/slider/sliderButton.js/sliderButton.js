import style from "../slider.module.scss"

const SliderButton = ({ side, handleSlideButtonClick }) => {
    return ( 
        <div 
        className={ style.sliderButtonContainer }
        onClick={()=>{ handleSlideButtonClick(side) }}>

            <div 
            className = {
                side === "right" ?
                `${style.sliderButton} ${style.sliderButtonRight}` :
                `${style.sliderButton} ${style.sliderButtonLeft}`
                } 
            />

        </div>
     );
}
 
export default SliderButton;