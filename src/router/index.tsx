import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogLoyout from "../layouts/LogLayout";
import SignUp from "../pages/Log/SignUp";
import LogIn from "../pages/Log/LogIn";


import UserLayout from "../layouts/UserLayout";
import Home from "../pages/UserPages/Home";

import Counter from "../pages/Counter";

export default function Router(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<LogLoyout />} /> */}
                    {/* <Route path='' element={<Home />} /> */}
                    <Route path='log' element={<LogLoyout />} >
                        <Route path="sign-up" element={<SignUp />} />
                        <Route path="log-in" element={<LogIn />} />
                    </Route>
                    <Route path=''  element={<UserLayout />} >
                        <Route index element={<Home />} ></Route>
                    </Route>    
                </Routes>
            </BrowserRouter>
        </>
    );
}