import style from "./sandbox.module.scss"
import Slider from "@/components/slider/slider";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";

const Sandbox = () => {
    return ( 
        <div className={style.sandboxWrapper}>
        
            <Slider childrenList={[
                (<ProjectCard
                    title={"Project Card 101"}
                    description={"\tLorem ipsum dolor, sit amet consectetur adipisicing elit.\n\tAmet illum at, excepturi cumque incidunt voluptatibus blanditiis quisquam cupiditate itaque dolorem facilis illo atque, enim error. Illo cupiditate laboriosam, laborum soluta natus aperiam."}
                    links={{demo:"/",github:"/"}}
                />),
                (<h1>#2</h1>),
                (<h1>#3</h1>),
            ]}/>

        </div>
     );
}
 
export default Sandbox;