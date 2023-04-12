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
    const fontColorHoverMap = {
        "Home":         "blue",
        "Projects":     "blue",
        "Blog":         "blue",
        "CV":           "blue",
        "Technologies": "blue",
        "Contact":      "blue",
    }
    const backgroundColorHoverMap = {
        "Home":         "green",
        "Projects":     "green",
        "Blog":         "green",
        "CV":           "green",
        "Technologies": "green",
        "Contact":      "green",
    }
    return (
        <>
        
            <Link className={style.link} href={page} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={style.button} 
                    style={{
                        color: hover?fontColorHoverMap[context.state.page]:context.layoutStyleMap.fontColorMap[context.state.page],
                        backgroundColor: hover?backgroundColorHoverMap[context.state.page]:""
                        }}
                        >
                    {title}
                </div>
            </Link>

        </>
    );
}
 
export default NavButton;