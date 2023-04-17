import NavBar from "./navBar/navBar";
import NavFrame from "./layoutContainer/layoutContainer";
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