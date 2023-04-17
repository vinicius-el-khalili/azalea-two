import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"
import style from "./cube.module.scss"
import CubeFace from "./cubeFace"


const Cube = () => {
    const context = useContext(AppContext)
    return (
    <>

    <div
    className={style.scene}>        
        <div className={`${style.cube} ${context.layoutStyleMap.cubeRotationMap[context.state.page]}`}>
            {context.layoutStyleMap.pages.map( page => (
                <CubeFace page={page} key={"cubeface_"+page}>
                    {
                        page=="Home"?
                        (<><p>Vinicius El Khalili</p><p>Front end developer</p></>):
                        page
                    }
                </CubeFace>
            ))}
            
        </div>
    </div>

    </>
)} 
export default Cube;