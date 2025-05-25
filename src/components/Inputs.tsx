import { Input } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

interface inputProps {
    placeholder: string,
    label: string,
    type?: string,
    dValue?: string,

};

export  function InputFiled({placeholder = '' , label = "label" , dValue= "" , type="text" } :inputProps){
    const [value,setValue] = useState(dValue);
    function updateInput(event){
        setValue(event?.target.value);
    }
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
                    margin: '.4em',
                    backgroundColor: 'white',
                    border: 'none',
                }}  
            />
    );
}