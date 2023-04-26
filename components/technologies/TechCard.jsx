import NeonSVG from "../neonSVG/neonSVG";
import style from "./TechCard.module.scss"


const TechCard = ({tech,color,title}) => {
    return (
        <div className={style.TechCardContainer}>
            <NeonSVG target={tech} shadowColor={color}/>
            <div className={style.title}>
                {title}
            </div>
        </div>
    );
}
 
export default TechCard;