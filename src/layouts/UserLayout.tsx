import { Outlet  } from "react-router-dom";

import { UserHeader } from "../components/Header";
import { UserAside } from "../components/Aside";
import { useState } from "react";


export default function UserLayout(){

    const [openAside,setOpenAside] = useState<boolean|null>(null);
    function toggleAside(){
        setOpenAside(old=>!old);
        console.log('Toggle clicked');
    }

    const homeClasses =  openAside? 'grid grid-cols-[300px_calc(100%_-_300px)] max-[550px]:[display:initial] ': '';//transition-all duration-1000 delay-1000 ease-in-out
    const asideClasses =  !openAside? 'hidden':null; 
    
    return (
        <div className={"w-[100vw] h-[100vh] " + homeClasses} >
            <aside className={"max-[550px]:w-[100%] max-[550px]:h-[100%] col-start-1 col-end-2 z-100 bg-[#eee]  max-[550px]:fixed max-[550px]:top-0 max-[550px]:left-0 max-[550px]:w-[100dvw] max-[550px]:h-[100dvh] "+asideClasses}>
                <div className="relative w-[100%] h-[100%]">
                    <span onClick={toggleAside} className={"hidden max-[550px]:[display:initial] z-200 w-[auto] cursor-pointer fixed max-[550px]:top-0  max-[550px]:right-0  rotate-45 font-bold text-2xl w-[38px] h-[41px] grid place-content-center rounded-full text-[2em] "}>+</span>
                    <UserAside />
                </div>
            </aside>
            <div className="col-start-2 col-end-3 w-[100%] h-[100%] ">
                <UserHeader toggleAside={toggleAside} />
                <Outlet />
            </div>
        </div>
    );
}