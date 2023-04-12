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
const backgroundColorMap = {
    "Home":         "#B2B2B2",
    "Projects":     "#393646",
    "Blog":         "#393646",
    "CV":           "#393646",
    "Technologies": "#393646",
    "Contact":      "#F4EEE0",
}

// --------- NAVBUTTON --------- //

const fontColorMap = {
    "Home":         "black",
    "Projects":     "blue",
    "Blog":         "green",
    "CV":           "black",
    "Technologies": "black",
    "Contact":      "black",
}

const fontColorHoverMap = {
    "Home":         "blue",
    "Projects":     "blue",
    "Blog":         "blue",
    "CV":           "blue",
    "Technologies": "blue",
    "Contact":      "blue",
}
const backgroundColorHoverMap = {
    "Home":         "green",
    "Projects":     "green",
    "Blog":         "green",
    "CV":           "green",
    "Technologies": "green",
    "Contact":      "green",
}

// --------- export --------- //

const layoutStyleMap = {
    // layout
    layoutContainerStyle,
    childrenContainerStyle,
    buttonsContainerStyle,
    backgroundColorMap,
    // cube
    cubeRotationMap,
    cubeFaceClassName,
    cubeFaceStyle,
    // buttons
    fontColorMap,
    fontColorHoverMap,
    backgroundColorHoverMap,
}


export default layoutStyleMap