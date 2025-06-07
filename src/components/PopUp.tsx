import { useEffect, useState } from "react";
import { InputFiled } from "./Inputs";
import { useDispatch } from "react-redux";
import axios from "axios";
import { putNotes } from "../state/Slices/productState";
import { Btn } from "./Buttons";

interface createNoteProps {
    openPopUp?: (open:()=>void)=>void,
}

export function CreateNote({openPopUp,}:createNoteProps){
    const [popUp,togglePopUp] = useState<boolean>(false);

    useEffect(()=>{
        if(openPopUp){
            openPopUp(()=>togglePopUp(true));
        }
    },[ ]);
    

    const [note,setNote] = useState({title: '',content: ''});

    function setTitle(title: string){
        setNote(oldNote=>({...oldNote,title}));
    }
    function setContent(content: string){
        setNote(oldNote=>({...oldNote, content}));
    }

    const [ reset , setReset ] = useState(false);

    function clear(){
        setReset(true);
        setTimeout(() => {
            setReset(!true);
        }, 0);
    }

    interface noteType{
        title: string,
        content: string,
        date: string,
    };

    const dispatch = useDispatch();
    const putNewNote = (note:noteType) => dispatch(putNotes([note]));
    
    async function createNewNote(){
        try{
            const response = await axios.post('http://localhost:3000/note',
            note,
            {
                headers:{
                    Authorization: 'bearer '+localStorage.getItem('token'),
                }
            });

            if(response.status === 201){
                if(response.data.status){
                    console.log(response.data.data);
                    //  Now I have to save this to state mangement 
                    putNewNote(response.data.data);
                    clear();
                    togglePopUp(false);    
                }
            }
        }catch(error){
            console.log('error',error);
        }
    }
    const result = popUp?(
        <>
            <div onClick={()=>togglePopUp(old=>!old)} className="w-[100vw] h-[100vh] fixed z-[200] top-0 left-0"></div>
                <div  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 z-[200] h-4/5 rounded-md h-[auto] max-w-[25em] bg-slate-500">
                    <div className="w-[100%]  p-[10px] font-bold flex items-center justify-start">
                    <p className="text-[white]">Create New Note :</p>
                </div>
                <div className="w-[100%]   p-[10px] font-bold flex  justify-start flex-col">
                    <p className="text-[white]">Not Title :</p>
                    <InputFiled getValueFn={setTitle} reset={reset}  label="to my aunt"  />
                </div>
                <div className="w-[100%]   p-[10px] font-bold flex justify-start  flex-col" >
                    <p className="text-[white]">Not Content :</p>
                    <InputFiled getValueFn={setContent}  reset={reset} label="take care of it" />
                </div>
                <div className="w-[100%]   p-[10px] font-bold flex justify-around items-center " >
                    <Btn defaultBtn={false} onClick={clear} label="Clear" />
                    <Btn onClick={createNewNote} label="Create" />
                </div>
            </div>
        </>
    ):null;
    return  result;
} 