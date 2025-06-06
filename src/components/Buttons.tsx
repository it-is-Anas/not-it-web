import Button from '@mui/material/Button';

interface BtnProps {
    label?: string;
    onClick?: () => void;
    defaultBtn?: boolean,
}

export function Btn({ label = "click me", onClick = () => console.log('btn clicked') , defaultBtn = true}: BtnProps) {
    
    if(defaultBtn)
        return (
            <div className="my-[10px]">
                <Button
                    variant="contained"
                    sx={{
                        background: '#7986cb',
                        textTransform: 'none',
                        fontWeight: 'bold',
                    }}
                    onClick={onClick}
                >
                    {label}
                </Button>
            </div>
        );
    else 
        return (
            <div className="my-[10px]">
                <Button
                    variant="contained"
                    sx={{
                        color: '#7986cb',
                        background: 'white',
                        border:'4px solid ',
                        textTransform: 'none',
                        fontWeight: 'bold',
                    }}
                    onClick={onClick}
                >
                    {label}
                </Button>
            </div>
        );
}
