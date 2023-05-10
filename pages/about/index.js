import Image from "next/image";
import style from "./about.module.scss"
import { useContext,useEffect } from "react";
import AppContext from "@/context/AppContext";

const About = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("About")
    },[])
    return (
        <div className={style.About}>
        
            <div className={style.profilePicture}>
               <Image 
               src={"/about/azalea.svg"}
               width={180}
               height={180}
               alt="v"
               />
            </div>
            <div>
                <h1>Hello, there!</h1>
                <p>My name is Vinicius. I'm a web developer, physicist, artist and passionate for learning, implementing and creating interdisciplinary solutions for interdisciplinary problems. </p>
                <p>Here you'll find more about my skills, background and previous experiences.</p>

            </div>
        </div>
    );
}
 
export default About;