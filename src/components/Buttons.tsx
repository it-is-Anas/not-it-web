import Button from '@mui/material/Button';

interface btn {
    label: string ,
};

export function Btn({label = "click me"}: btn){
    return (
        <div className="my-[10px]">
            <Button  
                variant="contained"
                
                sx={{
                    background: '#7986cb',
                    textTransform: 'none', 
                    fontWeight: 'bold'
                }}
            >{ label }</Button>
        </div>
    );
}