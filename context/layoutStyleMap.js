import cubeSCSS from "@/components/cube/cube.module.scss"

// --------- Controllers --------- //

const pages = ["Home","About","Technologies","Projects","CV","Contact"]

// --------- Palettes --------- //

const darkPastel = ["#F4EEE0","#6D5D6E","#4F4557","#393646"]
const aquaForest = ["#E7F6F2","#A5C9CA","#395B64","#2C3333"]
const darkConsole = ["#2A0944","#5F00BA","#8E05C2"]
const warmOrange = ["#454545","#FFE6C7","#FFA559","#FF6000"]
const pdfRed = ["#BA274A","#F9F5EB","#E4DCCF"]
const deepBlue = ["#47597E","#DBE6FD","#293B5F"]

// --------- CUBE --------- //

var cubeRotationMap = {}
cubeRotationMap[pages[0]]=cubeSCSS.cube__show__front
cubeRotationMap[pages[1]]=cubeSCSS.cube__show__back
cubeRotationMap[pages[2]]=cubeSCSS.cube__show__right
cubeRotationMap[pages[3]]=cubeSCSS.cube__show__left
cubeRotationMap[pages[4]]=cubeSCSS.cube__show__top
cubeRotationMap[pages[5]]=cubeSCSS.cube__show__bottom

const cubeFaceClassName = {}
cubeFaceClassName[pages[0]]=`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__front}`
cubeFaceClassName[pages[1]]=`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__back}`
cubeFaceClassName[pages[2]]=`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__right}`
cubeFaceClassName[pages[3]]=`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__left}`
cubeFaceClassName[pages[4]]=`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__top}`
cubeFaceClassName[pages[5]]=`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__bottom}`

const cubeFaceStyle = {}
cubeFaceStyle[pages[0]]={backgroundColor:"white",color:"black",border:"4px solid black"},
cubeFaceStyle[pages[1]]={backgroundColor:aquaForest[0],color:"black"}
cubeFaceStyle[pages[2]]={backgroundColor:"black",color:"white",border:"1px solid white",boxShadow:"0 0 15px #700B97",textShadow: "0px 0px 2px #B9EDDD",fontSize:"1.8rem"}
cubeFaceStyle[pages[3]]={background: "rgba(50, 50, 50,1)",color:warmOrange[3],borderRadius:"100%",marginLeft:"110px",boxShadow:"0 0 15px black", transition:"0s"}
cubeFaceStyle[pages[4]]={backgroundColor:pdfRed[1],color:pdfRed[0],borderColor:pdfRed[0]}
cubeFaceStyle[pages[5]]={backgroundColor:deepBlue[0],color:"white",color:"white"}

cubeFaceStyle["transparentBox"] = {background: "none",color:"transparent",border:"none"}

// --------- LAYOUT --------- //
 


const layoutContainerStyle = {}

layoutContainerStyle[pages[0]]={backgroundColor:darkPastel[0]}
layoutContainerStyle[pages[1]]={backgroundColor:aquaForest[1]}
layoutContainerStyle[pages[2]]={backgroundColor:"black"}
layoutContainerStyle[pages[3]]={backgroundColor:warmOrange[1]}
layoutContainerStyle[pages[4]]={backgroundColor:pdfRed[1]}
layoutContainerStyle[pages[5]]={backgroundColor:deepBlue[1]}

const buttonsContainerStyle = {}

buttonsContainerStyle[pages[0]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[1]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[2]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[3]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[4]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[5]]={borderTop:"2px solid black"}

const childrenContainerStyle = {}

childrenContainerStyle[pages[0]]={backgroundColor:darkPastel[2]}
childrenContainerStyle[pages[1]]={backgroundColor:aquaForest[3]}
childrenContainerStyle[pages[2]]={border:"1px solid white",boxShadow:"0 0 15px #700B97, inset 0 0 15px #700B97"}
childrenContainerStyle[pages[3]]={backgroundColor:warmOrange[1],borderRadius:"150px 10px 150px 10px",boxShadow:"0 0 5px black"}
childrenContainerStyle[pages[4]]={}
childrenContainerStyle[pages[5]]={backgroundColor:deepBlue[2],borderRadius:"30px"}

// --------- NAVBUTTON --------- //

const navButtonStyle = {}
navButtonStyle[pages[0]]={color:"black"}
navButtonStyle[pages[1]]={color:"black"}
navButtonStyle[pages[2]]={color:"white"}
navButtonStyle[pages[3]]={color:"black"}
navButtonStyle[pages[4]]={color:"black"}
navButtonStyle[pages[5]]={color:"black"}

const navButtonHoverStyle = {}
navButtonHoverStyle[pages[0]]={boxShadow:"0 0 5px black",color:"white",backgroundColor:darkPastel[3]}
navButtonHoverStyle[pages[1]]={boxShadow:"0 0 5px black",color:"white",backgroundColor:aquaForest[3]}
navButtonHoverStyle[pages[2]]={boxShadow:"0 0 5px white",color:"white",borderRadius:"6px"}
navButtonHoverStyle[pages[3]]={boxShadow:"none",color:"white",backgroundColor:warmOrange[0],borderRadius:"16px 0px 16px 0px"}
navButtonHoverStyle[pages[4]]={boxShadow:"0 0 5px black",color:"white",backgroundColor:pdfRed[0],borderRadius:"10px"}
navButtonHoverStyle[pages[5]]={boxShadow:"0 0 5px black",color:"white",backgroundColor:deepBlue[2],borderRadius:"1rem"}

// --------- export --------- //

const layoutStyleMap = {
    pages,
    // layout
    layoutContainerStyle,
    childrenContainerStyle,
    buttonsContainerStyle,
    // cube
    cubeRotationMap,
    cubeFaceClassName,
    cubeFaceStyle,
    // buttons
    navButtonStyle,
    navButtonHoverStyle,
}


export default layoutStyleMap