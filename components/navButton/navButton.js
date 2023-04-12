import style from "./navButton.module.scss"
import { useContext } from "react"
import AppContext from "@/context/AppContext"
import Link from "next/link"

const NavButton = ({title,page,tag}) => {
    const context = useContext(AppContext)
    const handleClick = () => {
        context.setPage(tag)
    }
    const fontColorMap = {
        "Home":         "red",
        "Projects":     "blue",
        "Blog":         "green",
        "CV":           "black",
        "Technologies": "black",
        "Contact":      "black",
    }
    return (
        <>
        
            <Link className={style.link} href={page} onClick={handleClick}>
                <div className={style.button} style={{color:fontColorMap[context.state.page]}}>
                    {title}
                </div>
            </Link>

        </>
    );
}
 
export default NavButton;