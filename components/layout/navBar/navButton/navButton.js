import style from "./navButton.module.scss"
import { useContext, useState } from "react"
import AppContext from "@/context/AppContext"
import Link from "next/link"

const NavButton = ({page}) => {
    const context = useContext(AppContext)
    const [hover,setHover] = useState(false)
    const handleClick = () => {
        context.setPage(page)
    }
    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }
    const href = page=="Home"?"/":"/"+page.toLowerCase()
    return (
        <>
        
            <Link
            className={style.link}
            href={href}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <div
                className={style.button} 
                style={
                hover ?
                context.layoutStyleMap.navButtonHoverStyle[context.state.page]
                :
                context.layoutStyleMap.navButtonStyle[context.state.page]
                }>
                    {page}
                </div>
            </Link>

        </>
    );
}
 
export default NavButton;