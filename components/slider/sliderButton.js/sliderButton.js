import style from "../slider.module.scss"

const SliderButton = ({side}) => {
    return ( 
        <>

        <div 
        className = {
            side === "right"
            ?
            `${style.sliderButton} ${style.right}`
            :
            `${style.sliderButton} ${style.left}`
        } />

        </>
     );
}
 
export default SliderButton;