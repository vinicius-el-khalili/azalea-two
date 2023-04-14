import Image from "next/image";

const NeonCSS = ({size}) => {
    return (
        <>
        
        <Image
        src={"/technologies/css.svg"}
        width={size}
        height={size}
        style={{
            filter: "drop-shadow(0px 0px 10px #33a9ec)"
        }}
        />
        
        </>
    );
}
 
export default NeonCSS;