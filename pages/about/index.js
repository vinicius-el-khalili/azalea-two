import Image from "next/image";
import style from "./about.module.scss"
import ProfilePicture from "@/components/about/AboutLayout/Azalea";

const About = () => {
    return (
        <div className={style.About}>
        
            <div className={style.profilePicture}>
               <Image 
               src={"/about/azalea.svg"}
               width={250}
               height={250}
               alt="v"
               />
            </div>
            <div>
                <h1>Hello, there!</h1>
                <p>My name is Vinicius. I'm a web developer, biomolecular physicist, artist and passionate for learning and creating interdisciplinary systems. </p>

            </div>
        </div>
    );
}
 
export default About;