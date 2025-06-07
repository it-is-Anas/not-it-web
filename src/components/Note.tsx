import React, { useState } from "react";
import { CreateNote } from "./PopUp";


interface props{
    title: string,
    content: string,
    date: string,
    id: null| number
};


export default function Note({title='',content='',date='',id=null}:props){
    

    
    function handleContextMenu(e:  React.MouseEvent){
        e.preventDefault();   
        if(!openContextMenu){
            toggleContextMenu(true);
        }
    }

    const [openPopUpAction, setOpenPop] = useState<() => void>(() => () => {});

    function openPop(open: () => void): void {
        if (open) {
            setOpenPop(() => open);
        }
    }

    const [openContextMenu,toggleContextMenu] = useState(false);
    const bk = openContextMenu ?( <div className="fixed top-0 left-0 z-100 w-[100vw] h-[100vh]" onClick={()=>toggleContextMenu(false)} ></div> ): null;
    const contextMenu = openContextMenu? 
    (
        <div className="absolute z-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-[#eee] rounded shadow" onClick={()=>toggleContextMenu(false)} >
            <p onClick={openPopUpAction} className="w-full px-2 py-1 cursor-pointer rounded  hover:bg-gray-200"  >Edit</p>
            <p className="w-full cursor-pointer rounded px-2 py-1   hover:bg-gray-200">Delete</p>
        </div>
    ):null;

    return (
        <>
            {bk}
            <div  className="relative w-[250px] h-[160px] m-[10px] rounded bg-[peachpuff]" onContextMenu={handleContextMenu} >
                <p className="max-h-[40px] font-bold py-[5px] px-[10px] w-[100%]" >{title}</p>
                <p className="p-[10px] h-[100px] font-[500]">{content}</p>
                <div className="w-[100%] h-[10px] p-[10px] border-t border-solid font-[500] text-[13px] flex items-center justify-end">{date}</div>
                {contextMenu}
            </div>
            <CreateNote openPopUp={openPop} title={title} content={content} id={id} />
        </>
    );
}