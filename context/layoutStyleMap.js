import cubeSCSS from "@/components/cube/cube.module.scss"

// --------- Controllers --------- //

const pages = ["Home","About","Technologies","Projects","CV","Contact"]

// --------- Palettes --------- //

const darkPastel = ["#F4EEE0","#6D5D6E","#4F4557","#393646"]
const aquaForest = ["#E7F6F2","#A5C9CA","#395B64","#2C3333"]
const darkConsole = ["#2A0944","#5F00BA","#8E05C2"]
const warmOrange = ["#454545","#FFE6C7","#FFA559","#FF6000"]
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
cubeFaceStyle[pages[3]]={background: "rgba(255, 255, 0, 0.1)"}
cubeFaceStyle[pages[4]]={backgroundColor:"#BA274A",color:"white"}
cubeFaceStyle[pages[5]]={backgroundColor:"#275DAD",color:"white"}

cubeFaceStyle["transparentBox"] = {background: "rgba(255, 255, 0, 0.1)",color:"transparent"}

// --------- LAYOUT --------- //
 


const layoutContainerStyle = {}

layoutContainerStyle[pages[0]]={backgroundColor:darkPastel[0]}
layoutContainerStyle[pages[1]]={backgroundColor:aquaForest[1]}
layoutContainerStyle[pages[2]]={backgroundColor:"black"}
layoutContainerStyle[pages[3]]={backgroundColor:warmOrange[1]}
layoutContainerStyle[pages[4]]={backgroundColor:"salmon"}
layoutContainerStyle[pages[5]]={backgroundColor:"salmon"}

const buttonsContainerStyle = {}

buttonsContainerStyle[pages[0]]={}
buttonsContainerStyle[pages[1]]={}
buttonsContainerStyle[pages[2]]={}
buttonsContainerStyle[pages[3]]={backgroundColor:warmOrange[3]}
buttonsContainerStyle[pages[4]]={}
buttonsContainerStyle[pages[5]]={}

const childrenContainerStyle = {}

childrenContainerStyle[pages[0]]={backgroundColor:darkPastel[2]}
childrenContainerStyle[pages[1]]={backgroundColor:aquaForest[3]}
childrenContainerStyle[pages[2]]={border:"1px solid white",boxShadow:"0 0 15px #700B97, inset 0 0 15px #700B97"}
childrenContainerStyle[pages[3]]={backgroundColor:warmOrange[2]}
childrenContainerStyle[pages[4]]={}
childrenContainerStyle[pages[5]]={}

// --------- NAVBUTTON --------- //

const navButtonStyle = {}
navButtonStyle[pages[0]]={color:"black"}
navButtonStyle[pages[1]]={color:"black"}
navButtonStyle[pages[2]]={color:"white"}
navButtonStyle[pages[3]]={color:"black"}
navButtonStyle[pages[4]]={color:"black"}
navButtonStyle[pages[5]]={color:"black"}

const navButtonHoverStyle = {}
navButtonHoverStyle[pages[0]]={color:"white",backgroundColor:darkPastel[3]}
navButtonHoverStyle[pages[1]]={color:"white",backgroundColor:"black"}
navButtonHoverStyle[pages[2]]={color:"white",boxShadow:"0 0 5px white",borderRadius:"12px"}
navButtonHoverStyle[pages[3]]={color:"white",backgroundColor:"black"}
navButtonHoverStyle[pages[4]]={color:"white",backgroundColor:"black"}
navButtonHoverStyle[pages[5]]={color:"white",backgroundColor:"black"}

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