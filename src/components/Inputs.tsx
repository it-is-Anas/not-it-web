import { Input } from '@mui/material';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';

interface inputProps {
    placeholder?: string,
    label?: string,
    type?: string,
    dValue?: string, 
    validationFn?: Function,
    getValueFn?: Function,
    hlaf?: boolean,
    reset?: boolean | null
};

export function InputFiled({placeholder = '' , label = "label" , dValue= "" , type="text" , validationFn=(value: boolean = true)=>value , getValueFn=(value: string )=>value ,hlaf= false ,reset = null } :inputProps){
    
    const [value,setValue] = useState(dValue);

    useEffect(()=>{
        if(reset){
            setValue('');
        }
    },[reset]);

    function updateInput(event){
        setValue(event?.target.value);
        validationFn(event?.target.value);
        getValueFn(event?.target.value);
    }
    if(!hlaf)
        return (
                <TextField
                    id={label}  
                    label={label } 
                    variant="outlined"   
                    onChange={updateInput} 
                    value={value} type={type}   
                    placeholder={placeholder}  
                    sx={{
                        width: '20em',
                        margin: '.4em auto',
                        backgroundColor: 'white',
                        border: 'none',
                        
                    }}  
                />
        );
        else
            return (
                    <TextField
                        id={label}  
                        label={label } 
                        variant="outlined"   
                        onChange={updateInput} 
                        value={value} type={type}   
                        placeholder={placeholder}  
                        sx={{
                            width: '40%',
                            margin: '.4em',
                            backgroundColor: 'white',
                            border: 'none',
                        }}  
                    />
            );


}



