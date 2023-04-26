import { useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";

import style from "./technologies.module.scss"
import Slider from "@/components/slider/slider";
import FrontEnd from "./sections/FrontEnd";
import BackEnd from "./sections/BackEnd";
import Tools from "./sections/Tools";
import DataScience from "./sections/DataScience";

const Technologies = () => {
    const context = useContext(AppContext)
    useEffect(()=>{
        context.setPage("Technologies")
    },[])
    return (
        <div className={style.layout}>
        
        <FrontEnd/>
        <BackEnd/>
        <Tools/>
        <DataScience/>
        
        </div>
    );
}
 
export default Technologies;