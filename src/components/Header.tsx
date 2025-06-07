
import {  useState } from "react";
import { CreateNote } from "./PopUp";

interface userHeaderProps{
    toggleAside: ()=>void,
};

export function UserHeader({toggleAside}: userHeaderProps){

    const [openPopUpAction, setOpenPop] = useState<() => void>(() => () => {});

    function openPop(open: () => void): void {
        if (open) {
            setOpenPop(() => open);
        }
    }


    function clickHandler(){
        toggleAside();
    }

    
    return (<>
        <header className="w-[100%] h-[65px] p-[.4em]  bg-[#eee] flex items-center justify-between" >
        <div className="flex items-center">
            <div onClick={clickHandler} className="w-[30px] cursor-pointer h-[30px]  flex flex-col justify-around">
                <span className="w-[100%] h-[6px] bg-[black]"></span>
                <span className="w-[100%] h-[6px] bg-[black]"></span>
                <span className="w-[100%] h-[6px] bg-[black]"></span>
            </div>
            <p className="p-2  text-[1.5em] font-bold">NOT IT</p>
        </div>
            <p onClick={openPopUpAction} className="text-[1em] font-100 bg-[white] p-[.3em] rounded text-center cursor-pointer">new note</p>
        </header>
        <CreateNote openPopUp={openPop} />
        </>
    );
}