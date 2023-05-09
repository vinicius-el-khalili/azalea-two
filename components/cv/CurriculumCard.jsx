import style from "./Curriculum.module.scss"

const CurriculumCard = ({period, activity, place, description}) => {
    return (
        <div className={style.CurriculumCard}>
            <div className={style.period}>
                {period}
            </div>
            <div className={style.activity}>
                {activity}
            </div>
            <div className={style.place}>
                {place}
            </div>
            <div className={style.description}>
                {description}
            </div>
            <div className={style.link}>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    Check out
                </a>
            </div>
        </div>
    );
}
 
export default CurriculumCard;