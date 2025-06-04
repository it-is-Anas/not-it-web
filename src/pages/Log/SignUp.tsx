import { InputFiled }  from "../../components/Inputs";
import { Btn } from "../../components/Buttons";
import { Link  } from "react-router-dom";

import { nameValidation, emailValidation , passwordValidation } from '../../validations/validations';
import { useState } from "react";


export default function SignUp(){

    const [ validateError , setValidateError] = useState({firstName: false ,lastName: false ,email: false, password: false, msg : ''}); 

    function fnValidate(value){
        const check = nameValidation(value);
        if(check){
            if(!validateError.firstName)
                setValidateError(oldData=>({...oldData,firstName: true ,msg: ''}));
        }else{ 
            setValidateError(oldData=>({...oldData,firstName: false ,msg: 'first name should between 2 and 10 and only nimuric ,chars ,and contain under score '}));
        }
    }
    function laValidate(value){
        const check = nameValidation(value);
        if(check){
            if(!validateError.lastName)
                setValidateError(oldData=>({...oldData,lastName: true ,msg: ''}));
        }else{ 
            setValidateError(oldData=>({...oldData,lastName: false ,msg: 'last name should between 2 and 10 and only nimuric ,chars ,and contain under score '}));
        }
    }
    function emailValidate(value){
        const check = emailValidation(value);
        if(check){
            if(!validateError.email)
                setValidateError(oldData=>({...oldData,email: true ,msg: ''}));
        }else{ 
            setValidateError(oldData=>({...oldData,email: false ,msg: 'email not a valied email'}));
        }
    }
    function passwordValidate(value){
        const check = passwordValidation(value);
        if(check){
            if(!validateError.password)
                setValidateError(oldData=>({...oldData,password: true ,msg: ''}));
        }else{ 
            setValidateError(oldData=>({...oldData,password: false ,msg: 'password should only containt nimurices and between 8 and 20'}));
        }
    }



    return (
        <>
            <div className="w-[100%] h-[100%] flex items-center justify-start " >
                <p className="p-2  text-[1.5em] font-bold">NOT IT</p>
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-center  ">
                <div className="flex items-center flex-col justify-around p-[0.5em] w-[25em] min-h-[27em] rounded-[10px] bg-[#eee] max-[767px]:w-[100%] max-[767px]:h-[100%]  max-[767px]:rounded-[0]  ">
                    <p className="p-2 text-[1.5em] font-bold">Sign Up</p>
                    <div className="w-[100%] flex items-center justify-center ">
                        <InputFiled  hlaf={true} placeholder="Jhon" label="Your first name" validationFn={fnValidate}  />
                        <InputFiled hlaf={true} placeholder="wick" label="Your last name" validationFn={laValidate}  />
                    </div>
                    <InputFiled placeholder="Jhon@example.com" type='email' label="E-mail" validationFn={emailValidate}  />
                    <InputFiled placeholder="********"   type='password' label="password" validationFn={passwordValidate}  />
                    <Btn label="Sign Up" />
                    <Link className="text-[#7986cb] text-[15px] font-[500]" to='/log/log-in' >Log in</Link>
                    <p className="text-[#ff7b64] text-[.9em] text-center w-[80%] font-[100px] " >{ validateError.msg }</p>
                </div>
            </div>
        </>
    );
}