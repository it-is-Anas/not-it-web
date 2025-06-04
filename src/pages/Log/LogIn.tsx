import { InputFiled }  from "../../components/Inputs";
import { Btn } from "../../components/Buttons";
import { Link  } from "react-router-dom";

import { emailValidation , passwordValidation } from '../../validations/validations';
import { useState } from "react";

export default function LogIn(){

    const [ validateError , setValidateError] = useState({email: false, password: false, msg : ''}); 

function emailValidate(value:string){
        const check = emailValidation(value);
        if(check){
            if(!validateError.email)
                setValidateError(oldData=>({...oldData,email: true ,msg: ''}));
        }else{ 
            setValidateError(oldData=>({...oldData,email: false ,msg: 'email not a valied email'}));
        }
    }
function passwordValidate(value:string){
    const check = passwordValidation(value);
    if(check){
        if(!validateError.password)
            setValidateError(oldData=>({...oldData,password: true ,msg: ''}));
    }else{ 
        setValidateError(oldData=>({...oldData,password: false ,msg: 'password should only containt nimurices and between 8 and 20'}));
    }
}

    
    function getEmail(value: string):void{
        console.log(value);
    }

    return (
        <>
            <div className="w-[100%] h-[100%] flex items-center justify-start " >
                <p className="p-2  text-[1.5em] font-bold">NOT IT</p>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center  ">
                <div className="flex items-center flex-col justify-around p-[0.5em] w-[25em] min-h-[27em] rounded-[10px] bg-[#eee] max-[767px]:w-[100%] max-[767px]:h-[100%]  max-[767px]:rounded-[0]  ">
                    <p className="p-2  text-[1.5em] font-bold">Log In</p>
                    <InputFiled placeholder="Jhon@example.com" type='email' label="E-mail" validationFn={emailValidate} getValueFn={getEmail}  />
                    <InputFiled placeholder="********"   type='password' label="password" validationFn={passwordValidate}  />
                    <Btn label="Log In" />
                    <Link className="text-[#7986cb] text-[15px] font-[500]" to='/log/sign-up' >Sign up</Link>
                    <p className="text-[#ff7b64] text-center w-[80%] text-[.9em] font-[100px] " >{ validateError.msg }</p>
                </div>
            </div>
        </>
    );
}