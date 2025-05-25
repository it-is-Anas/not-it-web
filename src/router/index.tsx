import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogLoyout from "../layouts/LogLayout";
import SignUp from "../pages/Log/SignUp";
import LogIn from "../pages/Log/LogIn";

import Home from "../pages/UserPages/Home";

export default function Router(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<LogLoyout />} /> */}
                    <Route path='log' element={<LogLoyout />} >
                        <Route path="sign-up" element={<SignUp />} />
                        <Route path="log-in" element={<LogIn />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}