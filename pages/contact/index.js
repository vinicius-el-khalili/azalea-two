import Image from "next/image";
import style from "./contact.module.scss"
import { useContext, useEffect } from "react";
import AppContext from "@/context/AppContext";
import Link from "next/link";

const Contact = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("Contact")
    },[])
    return (
        <div className={style.ContactWrapper}>
            
            <h1>Get in touch</h1>
            <div className={style.info}>

                <div>
                    <div onClick={() => {
                        navigator.clipboard.writeText("velkhaliliborsato@gmail.com")
                    }}>
                        <Image 
                        src={"/contact/email.svg"} 
                        width={25} 
                        height={25} 
                        alt="email" 
                        />
                    </div>
                    <p>velkhaliliborsato@gmail.com</p>
                </div>

                <Link 
                className={style.link}
                href={"https://www.linkedin.com/in/vinicius-el-khalili-borsato-04b70114a"} 
                target="_blank">
                    <div>
                        <Image 
                        src={"/contact/linkedin.svg"} 
                        width={25} 
                        height={25} 
                        alt="linkedin"/>
                    </div>
                    <p>LinkedIn</p>
                </Link>

                <Link 
                className={style.link}
                href={"https://github.com/vinicius-el-khalili"} 
                target="_blank">
                    <div>
                        <Image 
                        src={"/contact/github.svg"} 
                        width={25} 
                        height={25} 
                        alt="github"/>
                    </div>
                    <p>Github</p>
                </Link>

            </div>

        </div>
    );
}
 
export default Contact;