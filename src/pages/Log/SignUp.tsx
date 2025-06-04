import { InputFiled }  from "../../components/Inputs";
import { Btn } from "../../components/Buttons";
import { Link  } from "react-router-dom";

import { nameValidation, emailValidation , passwordValidation } from '../../validations/validations';
import { useState } from "react";
import { SignUpIp } from '../../config/backendipes';

import axios from 'axios';

export default function SignUp(){

    const [ validateError , setValidateError] = useState({firstName: false ,lastName: false ,email: false, password: false, msg : ''}); 

    function fnValidate(value:string){
        const check = nameValidation(value);
        if(check){
            if(!validateError.firstName)
                setValidateError(oldData=>({...oldData,firstName: true ,msg: ''}));
        }else{ 
            setValidateError(oldData=>({...oldData,firstName: false ,msg: 'first name should between 2 and 10 and only nimuric ,chars ,and contain under score '}));
        }
    }
    function laValidate(value:string){
        const check = nameValidation(value);
        if(check){
            if(!validateError.lastName)
                setValidateError(oldData=>({...oldData,lastName: true ,msg: ''}));
        }else{ 
            setValidateError(oldData=>({...oldData,lastName: false ,msg: 'last name should between 2 and 10 and only nimuric ,chars ,and contain under score '}));
        }
    }
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


    const [ user , setUser ] = useState({firstName: '',lastName: '',email: '',password: ''});

    function setFirstName(name: string){
        setUser(oldUser => ({...oldUser,firstName: name}));
    }
    function setLastName(name: string){
        setUser(oldUser => ({...oldUser,lastName: name}));
    }
    function setEmail(email: string){
        setUser(oldUser => ({...oldUser,email: email}));
    }
    function setPassword(password: string){
        setUser(oldUser => ({...oldUser,password: password}));
    }


    const signUp = async () => {
        try{
            const response = await axios.post('http://localhost:3000/auth', user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if(response.status ===  201){
                const {access_token , user: data, } = response.data;
                console.log(access_token,user); // I have to save this to state mangement
            }
        }catch(err){
            console.log('Something went wrong please try again later');
            console.log(err);
            if(err.response.status){
                console.log(err.response.data.message[1]);
            }
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
                        <InputFiled  hlaf={true} placeholder="Jhon" getValueFn={setFirstName} label="Your first name" validationFn={fnValidate}  />
                        <InputFiled hlaf={true} placeholder="wick" getValueFn={setLastName}  label="Your last name" validationFn={laValidate}  />
                    </div>
                    <InputFiled placeholder="Jhon@example.com"  getValueFn={setEmail}  type='email' label="E-mail" validationFn={emailValidate}  />
                    <InputFiled placeholder="********"   getValueFn={setPassword}   type='password' label="password" validationFn={passwordValidate}  />
                    <Btn label="Sign Up" onClick={signUp} />
                    <Link className="text-[#7986cb] text-[15px] font-[500]" to='/log/log-in' >Log in</Link>
                    <p className="text-[#ff7b64] text-[.9em] text-center w-[80%] font-[100px] " >{ validateError.msg }</p>
                </div>
            </div>
        </>
    );
}