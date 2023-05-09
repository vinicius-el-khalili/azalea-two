import Image from "next/image";
import { useState } from "react";

const NeonSVG = ({target,shadowColor}) => {
    const [hover,setHover] = useState(false)
    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }
    return (
        <>
        
        <Image
        src={`/technologies/${target}.svg`}
        width= {65}
        height={65}
        style={{
            filter: `drop-shadow(0px 0px ${hover?"15px":"5px"} ${shadowColor})`
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt={target}
        />
        
        </>
    );
}
 
export default NeonSVG;