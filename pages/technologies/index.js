import Image from "next/image";
import style from "./technologies.module.scss"

import NeonCSS from "./neonIcons/neonCSS";

const Technologies = () => {
    return (
        <>
        
        <div className={style.layout}>
            <NeonCSS size={150}/>
        </div>
        
        </>
    );
}
 
export default Technologies;