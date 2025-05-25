import { Outlet  } from "react-router-dom";
import {containerClasses} from '../style/classes';



export default function LogLayout(){
    const classes= "  mx-auto h-[100vh] ";
    return (
        <div className={classes + containerClasses + "grid grid-rows-[4em_1fr]" } >
            <Outlet />
        </div>
    );
}