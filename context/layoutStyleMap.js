import cubeSCSS from "@/components/cube/cube.module.scss"

const cubeRotationMap = {
    "Home":cubeSCSS.cube__show__front,
    "Projects":cubeSCSS.cube__show__back,
    "Blog":cubeSCSS.cube__show__right,
    "CV":cubeSCSS.cube__show__left,
    "Technologies":cubeSCSS.cube__show__top,
    "Contact":cubeSCSS.cube__show__bottom,
}
const borderColorMap = {
    "Home":         "#F4EEE0",
    "Projects":     "#F4EEE0",
    "Blog":         "#F4EEE0",
    "CV":           "#F4EEE0",
    "Technologies": "#576CBC",
    "Contact":      "#576CBC",
}


const layoutStyleMap = {
    cubeRotationMap,
    borderColorMap,
}


export default layoutStyleMap