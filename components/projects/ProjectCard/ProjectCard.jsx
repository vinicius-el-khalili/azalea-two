import Link from 'next/link';
import style from './ProjectCard.module.scss'

const ProjectCard = ({title,description,links}) => {
    return (
        <div className={style.ProjectCard}>
        
            <h1 className={style.title}>{title}</h1>
            <p className={style.description}>{description}</p>
            <div className={style.links}>
                <Link className={style.link} href={links.demo}>
                    <h2>Demo</h2></Link>
                <Link className={style.link} href={links.github}>
                    <h2>Github</h2></Link>
            </div>

        </div>
    );
}
 
export default ProjectCard;