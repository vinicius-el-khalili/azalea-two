import style from "./cube.module.scss"
const Cube = () => {

    return (
    <>

    <div className={style.scene}>        
        <div className={`${style.cube} ${style.cube__show__bottom}`}>
            <div className={`${style.cube__face} ${style.cube__face__front}`}   >  front</div>
            <div className={`${style.cube__face} ${style.cube__face__back}`}    >   back</div>
            <div className={`${style.cube__face} ${style.cube__face__right}`}   >  right</div>
            <div className={`${style.cube__face} ${style.cube__face__left}`}    >   left</div>
            <div className={`${style.cube__face} ${style.cube__face__top}`}     >    top</div>
            <div className={`${style.cube__face} ${style.cube__face__bottom}`}  > bottom</div>
        </div>
    </div>
    </>
)} 
export default Cube;