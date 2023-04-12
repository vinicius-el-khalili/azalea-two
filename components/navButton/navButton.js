import style from "./navButton.module.scss"
import { useContext, useState } from "react"
import AppContext from "@/context/AppContext"
import Link from "next/link"

const NavButton = ({title,page,tag}) => {
    const context = useContext(AppContext)
    const [hover,setHover] = useState(false)
    const handleClick = () => {
        context.setPage(tag)
    }
    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }
    
    return (
        <>
        
            <Link className={style.link} href={page} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={style.button} 
                    style={
                        hover ?
                        context.layoutStyleMap.navButtonHoverStyle[context.state.page]
                        :
                        context.layoutStyleMap.navButtonStyle[context.state.page]
                    }
                        >
                    {title}
                </div>
            </Link>

        </>
    );
}
 
export default NavButton;