
export function nameValidation(value: string):boolean{
        const regex = /^[a-zA-Z0-9._]{2,10}$/ig;
        return  regex.test(value);
    }

export function emailValidation(value: string):boolean{
        const regex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ig;
        return  regex.test(value);
    }
    
export function passwordValidation(value: string):boolean{
        const regex = /^[0-9]{8,20}$/ig;
        return  regex.test(value);
    }
