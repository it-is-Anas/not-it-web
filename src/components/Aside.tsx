import Avatar from '@mui/material/Avatar';

import dolfineImg from '../assets/dolphine.png';

export function UserAside(){
    return(<>
        <div className="w-[100%] h-[100%] ">
            <div className="w-[100%] h-[5em]  flex items-center">
                <Avatar alt="Remy Sharp" src={dolfineImg} className="w-[50px] h-[50px] ml-[10px] rounded-[50%] border-none bg-[white] border border-2" />
                <div className="w-[calc(100%_-_100px)] mx-[25px] h-[80%]  flex flex-col items-start justify-center">
                    <p className="font-bold text-[18px]">Ahmad Mohsen</p>
                    <p className="font-[500] text-[13px]">new user</p>
                </div>
            </div>
        </div>
    </>);
}