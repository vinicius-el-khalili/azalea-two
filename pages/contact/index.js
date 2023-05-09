import Image from "next/image";
import style from "./contact.module.scss"

const Contact = () => {
    return (
        <div className={style.ContactWrapper}>
            
            <div className={style.info}>
                <h1>Get in touch</h1>
                <div>
                    <div>
                        <Image src={"/contact/email.svg"} width={20} height={20} alt="mail"/>
                    </div>
                    <p>velkhaliliborsato@gmail.com</p>
                </div>
            </div>

        </div>
    );
}
 
export default Contact;