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
                    alt='title'
                />
            </div>
            <p className={style.description}>{description}</p>
            <div className={style.links}>
                
                {links.demo?
                (
                <Link className={style.link} href={links.demo} target="_blank"> 
                    <Image src={"/projects/link.svg"} width={22} height={22}/>
                    <p>Demo</p>
                </Link>
                ):
                (
                <div className={style.link}>
                <Image className={style.spinning} src={"/projects/gear.svg"} width={22} height={22}/>
                <p className={style.link}>Under development</p>
                </div>
                )
                }

                {links.github?
                (
                <Link className={style.link} href={links.github}>
                    <Image src={"/projects/github.svg"} width={25} height={25}/>
                    <p>Github</p></Link>    
                ):null}

            </div>

        </div>
    );
}
 
export default ProjectCard;