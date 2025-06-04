import Button from '@mui/material/Button';

interface BtnProps {
    label?: string;
    onClick?: () => void;
}

export function Btn({ label = "click me", onClick = () => console.log('btn clicked') }: BtnProps) {
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
}
