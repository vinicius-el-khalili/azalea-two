import style from "./about.module.scss"
import AboutLayout from "@/components/about/AboutLayout/AboutLayout";

const About = () => {
    return (
        <div className={style.About}>
        
        <AboutLayout>
            <h1>About me?</h1>
        </AboutLayout>
        
        </div>
    );
}
 
export default About;