import Curriculum from "@/components/cv/Curriculum";
import { useContext, useEffect } from "react";
import AppContext from "@/context/AppContext";

const CV = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("CV")
    },[])
    return (
        <div>
        
        <Curriculum/>

        </div>
    );
}
 
export default CV;