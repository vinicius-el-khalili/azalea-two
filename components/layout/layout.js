import NavBar from "./navBar/navBar";
import NavFrame from "./navFrame/navFrame";
import Cube from "../cube/cube";

const Layout = ({children}) => {
    return (
        <>
        
        <NavFrame>
            
            <NavBar/>
            <Cube/>
            
            {children}

        </NavFrame>
        
        </>
    );
}
 
export default Layout;