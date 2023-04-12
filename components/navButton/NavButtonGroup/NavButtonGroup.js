import NavButton from "../navButton"
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const NavButtonCollection = () => {
    const context = useContext(AppContext)
    return (
        <>

        <NavButton page={context.layoutStyleMap.pages[0]}/>
        <NavButton page={context.layoutStyleMap.pages[1]}/>
        <NavButton page={context.layoutStyleMap.pages[2]}/>
        <NavButton page={context.layoutStyleMap.pages[3]}/>
        <NavButton page={context.layoutStyleMap.pages[4]}/>
        <NavButton page={context.layoutStyleMap.pages[5]}/>

        </>
    );
}
 
export default NavButtonCollection;