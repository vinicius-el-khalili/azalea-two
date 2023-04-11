import style from "./navButton.module.scss"
import { useContext } from "react"
import AppContext from "@/context/AppContext"
import Link from "next/link"

const NavButton = ({title,page}) => {
    return (
        <>
        
            <Link className={style.link} href={page}>
                <div className={style.button}>{title}</div>
            </Link>

        </>
    );
}
 
export default NavButton;