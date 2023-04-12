import NavButton from "../navButton"
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const NavButtonCollection = () => {
    const context = useContext(AppContext)
    return (
        <>

        {
            context.layoutStyleMap.pages.map( page => (
                <NavButton page={page} key={"navbutton_"+page}/>        
            ))
        }

        </>
    );
}
 
export default NavButtonCollection;