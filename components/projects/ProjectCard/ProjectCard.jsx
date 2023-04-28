import Link from 'next/link';
import style from './ProjectCard.module.scss'
import Image from 'next/image';

const ProjectCard = ({title,description,links}) => {
    return (
        <div className={style.ProjectCard}>
        
            <h1 className={style.title}>{title}</h1>
            <div className={style.image}>
                <Image
                    src={links.img}
                    fill
                    style={{objectFit:"contain"}}
                />
            </div>
            <p className={style.description}>{description}</p>
            <div className={style.links}>
                
                {links.demo?
                (
                <Link className={style.link} href={links.demo}>
                    <p>Demo</p></Link>
                ):null}

                {links.github?
                (
                <Link className={style.link} href={links.github}>
                    <p>Github</p></Link>    
                ):null}

            </div>

        </div>
    );
}
 
export default ProjectCard;