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
        width= {150}
        height={150}
        style={{
            filter: `drop-shadow(0px 0px 10px ${hover?"red":shadowColor})`
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        />
        
        </>
    );
}
 
export default NeonSVG;