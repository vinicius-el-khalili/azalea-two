import cubeSCSS from "@/components/cube/cube.module.scss"

// --------- Controllers --------- //

const pages = ["Home","About","Technologies","Projects","Sandbox","Contact"]

// --------- Palettes --------- //

const darkPastel = ["#F4EEE0","#6D5D6E","#4F4557","#393646"]
const aquaForest = ["#E7F6F2","#A5C9CA","#395B64","#2C3333"]
const darkConsole = ["#2A0944","#5F00BA","#8E05C2"]
const warmOrange = ["#454545","#FFE6C7","#FFA559","#FF6000"]
const pdfRed = ["#BA274A","#F9F5EB","#E4DCCF"]
const deepBlue = ["#47597E","#DBE6FD","#293B5F"]

const steveReich = ["white","#8BF5FA","#F8F988","#FFDCA9","#B3FFAE","#B1AFFF"]

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
cubeFaceStyle[pages[0]]={backgroundColor:"#454545",color:"white",border:"1px solid "+steveReich[0],boxShadow:"0 0 5px "+steveReich[0] }
cubeFaceStyle[pages[1]]={backgroundColor:"#454545",color:"white",border:"1px solid "+steveReich[1],boxShadow:"0 0 5px "+steveReich[1] }
cubeFaceStyle[pages[2]]={backgroundColor:"#454545",color:"white",border:"1px solid "+steveReich[2],boxShadow:"0 0 5px "+steveReich[2] ,fontSize:"1.8rem"}
cubeFaceStyle[pages[3]]={backgroundColor:"#454545",color:"white",border:"2px solid white"         ,boxShadow:"0 0 5px "+steveReich[3] }
cubeFaceStyle[pages[4]]={backgroundColor:"#454545",color:"white",border:"1px solid "+steveReich[4],boxShadow:"0 0 5px "+steveReich[4] }
cubeFaceStyle[pages[5]]={backgroundColor:"#454545",color:"white",border:"1px solid white"         ,boxShadow:"0 0 5px "+steveReich[5] }

cubeFaceStyle["transparentBox"] = {background: "none",color:"transparent",border:"none"}

// --------- LAYOUT --------- //
 
const buttonsContainerStyle = {}

buttonsContainerStyle[pages[0]]={}
buttonsContainerStyle[pages[1]]={}
buttonsContainerStyle[pages[2]]={}
buttonsContainerStyle[pages[3]]={}
buttonsContainerStyle[pages[4]]={}
buttonsContainerStyle[pages[5]]={}

const layoutContainerStyle = {}

layoutContainerStyle[pages[0]]={borderRadius:"1rem",boxShadow:"0 0 1rem "+steveReich[0]}
layoutContainerStyle[pages[1]]={borderRadius:"1rem",boxShadow:"0 0 1rem "+steveReich[1]}
layoutContainerStyle[pages[2]]={borderRadius:"1rem",boxShadow:"0 0 1rem "+steveReich[2]}
layoutContainerStyle[pages[3]]={borderRadius:"1rem",boxShadow:"0 0 1rem "+steveReich[3]}
layoutContainerStyle[pages[4]]={borderRadius:"1rem",boxShadow:"0 0 1rem "+steveReich[4]}
layoutContainerStyle[pages[5]]={borderRadius:"1rem",boxShadow:"0 0 1rem "+steveReich[5]}

// --------- NAVBUTTON --------- //

const navButtonStyle = {}
navButtonStyle[pages[0]]={color:"white"}
navButtonStyle[pages[1]]={color:"white"}
navButtonStyle[pages[2]]={color:"white"}
navButtonStyle[pages[3]]={color:"white"}
navButtonStyle[pages[5]]={color:"white"}
navButtonStyle[pages[4]]={color:"white"}

const navButtonHoverStyle = {}
navButtonHoverStyle[pages[0]]={backgroundColor:"#2D2727",color:steveReich[0]}
navButtonHoverStyle[pages[1]]={backgroundColor:"#2D2727",color:steveReich[1]}
navButtonHoverStyle[pages[2]]={backgroundColor:"#2D2727",color:steveReich[2]}
navButtonHoverStyle[pages[3]]={backgroundColor:"#2D2727",color:steveReich[3]}
navButtonHoverStyle[pages[4]]={backgroundColor:"#2D2727",color:steveReich[4]}
navButtonHoverStyle[pages[5]]={backgroundColor:"#2D2727",color:steveReich[5]}

// --------- export --------- //

const layoutStyleMap = {
    pages,
    // layout
    layoutContainerStyle,
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