import cubeSCSS from "@/components/cube/cube.module.scss"

// --------- Controllers --------- //

const pages = ["Home","Projects","Vlaw","CV","Technologies","Contact"]

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
cubeFaceStyle[pages[0]]={backgroundColor:"white",color:"black",borderColor:"transparent"},
cubeFaceStyle[pages[1]]={backgroundColor:"#17C3B2",color:"black"}
cubeFaceStyle[pages[2]]={backgroundColor:"#F5853F",color:"black"}
cubeFaceStyle[pages[3]]={backgroundColor:"#5F00BA",color:"white",boxShadow:"0 0 20px #B9EDDD"}
cubeFaceStyle[pages[4]]={backgroundColor:"#BA274A",color:"white"}
cubeFaceStyle[pages[5]]={backgroundColor:"#275DAD",color:"white"}

// --------- LAYOUT --------- //
 
const childrenContainerStyle = {}
childrenContainerStyle[pages[0]]={borderColor:"red"}
childrenContainerStyle[pages[1]]={borderColor:"red"}
childrenContainerStyle[pages[2]]={borderColor:"red"}
childrenContainerStyle[pages[3]]={borderColor:"red"}
childrenContainerStyle[pages[4]]={borderColor:"red"}
childrenContainerStyle[pages[5]]={borderColor:"red"}

const buttonsContainerStyle = {}
buttonsContainerStyle[pages[0]]={borderColor:"pink"}
buttonsContainerStyle[pages[1]]={borderColor:"pink"}
buttonsContainerStyle[pages[2]]={borderColor:"pink"}
buttonsContainerStyle[pages[3]]={borderColor:"pink"}
buttonsContainerStyle[pages[4]]={borderColor:"pink"}
buttonsContainerStyle[pages[5]]={borderColor:"pink"}

const layoutContainerStyle = {}
layoutContainerStyle[pages[0]]={backgroundColor:"salmon"}
layoutContainerStyle[pages[1]]={backgroundColor:"salmon"}
layoutContainerStyle[pages[2]]={backgroundColor:"salmon"}
layoutContainerStyle[pages[3]]={backgroundColor:"salmon"}
layoutContainerStyle[pages[4]]={backgroundColor:"salmon"}
layoutContainerStyle[pages[5]]={backgroundColor:"salmon"}

// --------- NAVBUTTON --------- //

const navButtonStyle = {}
navButtonStyle[pages[0]]={color:"black"}
navButtonStyle[pages[1]]={color:"black"}
navButtonStyle[pages[2]]={color:"black"}
navButtonStyle[pages[3]]={color:"black"}
navButtonStyle[pages[4]]={color:"black"}
navButtonStyle[pages[5]]={color:"black"}

const navButtonHoverStyle = {}
navButtonHoverStyle[pages[0]]={color:"green",backgroundColor:"black"}
navButtonHoverStyle[pages[1]]={color:"white",backgroundColor:"black"}
navButtonHoverStyle[pages[2]]={color:"white",backgroundColor:"black"}
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