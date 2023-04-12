import cubeSCSS from "@/components/cube/cube.module.scss"

// --------- PALETTES --------- //


// --------- CUBE --------- //

const cubeRotationMap = {
    "Home":cubeSCSS.cube__show__front,
    "Projects":cubeSCSS.cube__show__back,
    "Blog":cubeSCSS.cube__show__right,
    "CV":cubeSCSS.cube__show__left,
    "Technologies":cubeSCSS.cube__show__top,
    "Contact":cubeSCSS.cube__show__bottom,
}
const cubeFaceClassName = {
    "Home":`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__front}`,
    "Projects":`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__back}`,
    "Blog":`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__right}`,
    "CV":`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__left}`,
    "Technologies":`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__top}`,
    "Contact":`${cubeSCSS.cube__face} ${cubeSCSS.cube__face__bottom}`,
}
const cubeFaceStyle = {
    "Home":{
        backgroundColor:"white",
        color:"black",
        borderColor:"transparent"
    },
    "Projects":{
        backgroundColor:"#17C3B2",
        color:"black"
    },
    "Blog":{
        backgroundColor:"#F5853F",
        color:"black"
    },
    "CV":{
        backgroundColor:"#5F00BA",
        color:"white",
        boxShadow:"0 0 20px #B9EDDD"
    },
    "Technologies":{
        backgroundColor:"#BA274A",
        color:"white"
    },
    "Contact":{
        backgroundColor:"#275DAD",
        color:"white"
    },
}

// --------- LAYOUT --------- //
 
const borderColorMap = {
    "Home":         "transparent",
    "Projects":     "#F4EEE0",
    "Blog":         "#F4EEE0",
    "CV":           "#F4EEE0",
    "Technologies": "#576CBC",
    "Contact":      "#576CBC",
}
const childrenContainerStyle = {
    "Home":         {borderColor:"red"},
    "Projects":     {borderColor:"red"},
    "Blog":         {borderColor:"red"},
    "CV":           {borderColor:"red"},
    "Technologies": {borderColor:"red"},
    "Contact":      {borderColor:"red"},
}
const buttonsContainerStyle = {
    "Home":         {borderColor:"pink"},
    "Projects":     {borderColor:"pink"},
    "Blog":         {borderColor:"pink"},
    "CV":           {borderColor:"pink"},
    "Technologies": {borderColor:"pink"},
    "Contact":      {borderColor:"pink"},
}
const layoutContainerStyle = {
    "Home":         {backgroundColor:"salmon"},
    "Projects":     {backgroundColor:"salmon"},
    "Blog":         {backgroundColor:"salmon"},
    "CV":           {backgroundColor:"salmon"},
    "Technologies": {backgroundColor:"salmon"},
    "Contact":      {backgroundColor:"salmon"},
}

// --------- NAVBUTTON --------- //

const navButtonStyle = {
    "Home":         {color:"black"},
    "Projects":     {color:"black"},
    "Blog":         {color:"black"},
    "CV":           {color:"black"},
    "Technologies": {color:"black"},
    "Contact":      {color:"black"},
}
const navButtonHoverStyle = {
    "Home":         {color:"white",backgroundColor:"black"},
    "Projects":     {color:"white",backgroundColor:"black"},
    "Blog":         {color:"white",backgroundColor:"black"},
    "CV":           {color:"white",backgroundColor:"black"},
    "Technologies": {color:"white",backgroundColor:"black"},
    "Contact":      {color:"white",backgroundColor:"black"},
}

// --------- export --------- //

const layoutStyleMap = {
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