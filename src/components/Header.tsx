
import {  useState } from "react";
import { CreateNote } from "./PopUp";

export function UserHeader(){

    const [openPopUpAction, setOpenPop] = useState<() => void>(() => () => {});

    function openPop(open: () => void): void {
        if (open) {
            setOpenPop(() => open);
        }
    }

    

    
    return (<>
        <header className="w-[100%] h-[65px] p-[.4em]  bg-[#eee] flex items-center justify-between" >
            <p className="p-2  text-[1.5em] font-bold">NOT IT</p>
            <p onClick={openPopUpAction} className="text-[1em] font-100 bg-[white] p-[.3em] rounded text-center cursor-pointer">new note</p>
        </header>
        <CreateNote openPopUp={openPop} />
        </>
    );
}