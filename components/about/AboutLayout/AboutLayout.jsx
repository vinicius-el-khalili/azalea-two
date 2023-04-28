import Image from "next/image";
import style from "./AboutLayout.module.scss"

const AboutLayout = ({children}) => {
    return (
        <>
        
        <div className={style.AboutLayout}>
            <div className={style.childrenContainer}>
                {children}
            </div>
            <div className={style.plants}>
                <div><Image src={"/about/plantOne.svg"} fill style={{objectFit:"contain"}}/></div>
                <div><Image src={"/about/plantTwo.svg"} fill style={{objectFit:"contain"}}/></div>
                <div><Image src={"/about/plantThree.svg"} fill style={{objectFit:"contain"}}/></div>
            </div>
        </div>
        
        </>
    );
}
 
export default AboutLayout;