import CurriculumCard from "./CurriculumCard";
import { curriculumContent } from "./curriculumContent";
import style from "./Curriculum.module.scss"

const Curriculum = () => {
    return (
        <div className={style.CurriculumWrapper}>
            <div className={style.CurriculumSection}>
                {curriculumContent.map(content=>(
                    <CurriculumCard
                        period={content.period}
                        activity={content.activity}
                        place={content.place}
                        description={content.description}
                        key={content.activity}
                    />
                ))}        
            </div>
        </div>
    );
}
 
export default Curriculum;