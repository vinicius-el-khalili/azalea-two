import Image from "next/image";
import style from "./technologies.module.scss"

import NeonCSS from "./neonIcons/neonCSS";
import NeonSVG from "./neonIcons/neonSVG";

const Technologies = () => {
    return (
        <>
        
        <div className={style.layout}>
            <Image 
            src={"/technologies/html.svg"}
            width={350}
            height={350}
            />
            <NeonCSS size={150}/>
            <NeonSVG target={"css"} shadowColor={"#33a9ec"}/>
        </div>
        
        </>
    );
}
 
export default Technologies;