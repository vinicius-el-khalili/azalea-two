import cubeSCSS from "@/components/cube/cube.module.scss"

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
        border:"2px solid black"
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
        color:"white"
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
    "Home":         "#F4EEE0",
    "Projects":     "#F4EEE0",
    "Blog":         "#F4EEE0",
    "CV":           "#F4EEE0",
    "Technologies": "#576CBC",
    "Contact":      "#576CBC",
}

const backgroundColorMap = {
    "Home":         "#F4EEE0",
    "Projects":     "#393646",
    "Blog":         "#393646",
    "CV":           "#393646",
    "Technologies": "#393646",
    "Contact":      "#F4EEE0",
}

// --------- NAVBUTTON --------- //

const fontColorMap = {
    "Home":         "red",
    "Projects":     "blue",
    "Blog":         "green",
    "CV":           "black",
    "Technologies": "black",
    "Contact":      "black",
}

// --------- export --------- //

const layoutStyleMap = {
    cubeRotationMap,
    borderColorMap,
    backgroundColorMap,
    cubeFaceClassName,
    cubeFaceStyle,
    fontColorMap,
}


export default layoutStyleMap