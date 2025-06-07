import { Outlet  } from "react-router-dom";

import { UserHeader } from "../components/Header";

export default function UserLayout(){
    return (
        <div className=" w-[100%] h-[100vh] ">
            <UserHeader />
            <Outlet />
        </div>
    );
}