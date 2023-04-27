import style from "../navBar.module.scss"
const NavMenuButton = ({navMenu,setNavMenu}) => {
    return (
        <>
        
        <div 
        className={`${style.NavMenuButton} ${ navMenu ? style.on : style.off }`}
        onClick={()=>{
            if (navMenu){ setNavMenu(false) }else{ setNavMenu(true) }
        }}
        >

            <div className={style.line}/>
            <div className={style.line}/>
            <div className={style.line}/>
        </div>
        
        </>
    );
}
 
export default NavMenuButton;