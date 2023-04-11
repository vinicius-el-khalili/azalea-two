import style from "./navButton.module.scss"
import { useContext } from "react"
import AppContext from "@/context/AppContext"
import Link from "next/link"

const NavButton = ({title,page,tag}) => {

    const context = useContext(AppContext)
    const handleClick = () => {
        console.log("hi")
        context.setSide(tag)
    }

    return (
        <>
        
            <Link className={style.link} href={page} onClick={handleClick}>
                <div className={style.button}>{title}</div>
            </Link>

        </>
    );
}
 
export default NavButton;