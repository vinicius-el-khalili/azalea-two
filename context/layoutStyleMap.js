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
cubeFaceStyle[pages[0]]={backgroundColor:"#454545",color:"white",border:"1px solid white",boxShadow:"0 0 5px white"}
cubeFaceStyle[pages[1]]={backgroundColor:"#454545",color:"white",border:"1px solid #8BF5FA",boxShadow:"0 0 5px #8BF5FA"}
cubeFaceStyle[pages[2]]={backgroundColor:"#454545",color:"white",border:"1px solid #F8F988",boxShadow:"0 0 5px #F8F988",fontSize:"1.8rem"}
cubeFaceStyle[pages[3]]={backgroundColor:"#454545",color:"white",border:"1px solid #FF8D29",boxShadow:"0 0 25px #FF8D29",borderRadius:"100%",marginLeft:"110px", transition:"0s"}
cubeFaceStyle[pages[4]]={backgroundColor:"#454545",color:"white",border:"1px solid white",boxShadow:"0 0 5px white"}
cubeFaceStyle[pages[5]]={backgroundColor:"#454545",color:"white",border:"1px solid #0096FF",boxShadow:"0 0 5px #0096FF"}

cubeFaceStyle["transparentBox"] = {background: "none",color:"transparent",border:"none"}

// --------- LAYOUT --------- //
 


const layoutContainerStyle = {}

layoutContainerStyle[pages[0]]={backgroundColor:"#454545"}
layoutContainerStyle[pages[1]]={backgroundColor:"#454545"}
layoutContainerStyle[pages[2]]={backgroundColor:"#454545"}
layoutContainerStyle[pages[3]]={backgroundColor:"#454545"}
layoutContainerStyle[pages[4]]={backgroundColor:"#454545"}
layoutContainerStyle[pages[5]]={backgroundColor:"#454545"}

const buttonsContainerStyle = {}

buttonsContainerStyle[pages[0]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[1]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[2]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[3]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[4]]={borderTop:"2px solid black"}
buttonsContainerStyle[pages[5]]={borderTop:"2px solid black"}

const childrenContainerStyle = {}

childrenContainerStyle[pages[0]]={borderRadius:"1rem", border:"1px solid gray",boxShadow:"0 0 1rem white"}
childrenContainerStyle[pages[1]]={borderRadius:"1rem", border:"1px solid #8BF5FA",boxShadow:"0 0 1rem #8BF5FA"}
childrenContainerStyle[pages[2]]={borderRadius:"1rem", border:"1px solid #F8F988",boxShadow:"0 0 1rem #F8F988"}
childrenContainerStyle[pages[3]]={borderRadius:"1rem", border:"1px solid #FF8D29",boxShadow:"0 0 1rem #FF8D29"}
childrenContainerStyle[pages[4]]={borderRadius:"1rem", border:"1px solid gray",boxShadow:"0 0 1rem white"}
childrenContainerStyle[pages[5]]={borderRadius:"1rem", border:"1px solid gray",boxShadow:"0 0 1rem #0096FF"}

// --------- NAVBUTTON --------- //

const navButtonStyle = {}
navButtonStyle[pages[0]]={color:"white"}
navButtonStyle[pages[1]]={color:"white"}
navButtonStyle[pages[2]]={color:"white"}
navButtonStyle[pages[3]]={color:"white"}
navButtonStyle[pages[5]]={color:"white"}
navButtonStyle[pages[4]]={color:"white"}

const navButtonHoverStyle = {}
navButtonHoverStyle[pages[0]]={boxShadow:"0 0 5px black",color:"white",backgroundColor:darkPastel[3]}
navButtonHoverStyle[pages[1]]={boxShadow:"0 0 5px black",color:"white",backgroundColor:aquaForest[3]}
navButtonHoverStyle[pages[2]]={boxShadow:"0 0 5px black",color:"black",borderRadius:"6px"}
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