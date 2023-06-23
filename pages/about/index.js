import Image from "next/image";
import AppContext from "@/context/AppContext";
import { useContext,useEffect } from "react";

import style from "./about.module.scss"
import ProfilePicture from "@/components/profilePicture/ProfilePicture2";

const About = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("About")
    },[])
    return (
        <div className={style.About}>
        
            <div className={style.profilePicture}>
                
                <ProfilePicture size={150}/>
                
            </div>
            <div>
                <h1>Hello, there!</h1>
                <p>My name is <span>Vinicius</span>.<br/> <p></p> I'm a web developer, physicist, artist and human. <p></p> I'm passionate for learning, implementing and creating interdisciplinary solutions for interdisciplinary problems. </p>
                <p>Here you'll find more about my skills, background and previous experiences.</p>

            </div>
        </div>
    );
}
 
export default About;