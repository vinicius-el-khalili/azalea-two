import { useContext } from "react";
import AppContext from "@/context/AppContext";

const CubeFace = ({page,children}) => {
    const context = useContext(AppContext)
    return (
        <>
        
        <div
        style={context.layoutStyleMap.cubeFaceStyle[context.state.page]}
        className={context.layoutStyleMap.cubeFaceClassName[page]}>
            {children}
        </div>
        
        </>
    );
}
 
export default CubeFace;