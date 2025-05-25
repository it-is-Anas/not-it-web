import * as React from 'react';
import dolphine from '../../assets/dolphine.png';
import { InputFiled }  from "../../components/Inputs";
import { Btn } from "../../components/Buttons";
import { Link  } from "react-router-dom";



export default function SignUp(){
    return (
        <>
            <div className="w-[100%] h-[100%] flex items-center justify-start " >
                <p className="p-2 font-bold">Log In</p>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center  ">
                <div className="flex items-center flex-col justify-around p-[0.5em] w-[25em] min-h-[27em] rounded-[10px] bg-[#eee] max-[767px]:w-[100%] max-[767px]:h-[100%]  max-[767px]:rounded-[0]  ">
                    <img className="m-[1em] flex items-center flex-col justify-start" src={dolphine} alt="" />    
                    <InputFiled placeholder="Jhon@example.com" type='email' label="E-mail"  />
                    <InputFiled placeholder="********"   type='password' label="password"  />
                    <Btn label="Log In" />
                    <Link className="text-[#7986cb] text-[15px] font-[500]" to='/log/sign-up' >Sign up</Link>
                </div>
            </div>
        </>
    );
}