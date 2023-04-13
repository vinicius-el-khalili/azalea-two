import { useContext } from "react";
import AppContext from "@/context/AppContext";

const CubeFace = ({page,children}) => {
    const context = useContext(AppContext)
    return (
        <>
        
        <div
        style={
            context.state.page == context.layoutStyleMap.pages[3]
            ?
                page == context.layoutStyleMap.pages[3]
                ?
                context.layoutStyleMap.cubeFaceStyle[context.state.page]
                :
                context.layoutStyleMap.cubeFaceStyle["transparentBox"]
            :
            context.layoutStyleMap.cubeFaceStyle[context.state.page]
        }
        className={context.layoutStyleMap.cubeFaceClassName[page]}>
            {children}
        </div>
        
        </>
    );
}
 
export default CubeFace;