import React, { useState } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Context } from "../Context/Context"
import { AppUser } from "../Pages/AppUser"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Logout } from "../Pages/Logout"
import { Footer } from "../Pages/PartialView/Footer"
import { Header } from "../Pages/PartialView/Header"
import { SignUp } from "../Pages/SignUp"
import { UserRouter } from "./UserRouter"

export const AppRouter = () => {
    const [loader, setLoader] = useState<boolean>(false);
    const user = useSelector((stateLogin: any) => stateLogin.login)
    console.log(user);

    return (
        <React.Fragment>
            <Context.Provider value={{ loader, setLoader }} >
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<UserRouter user={user} />}>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/signup" element={<SignUp />}></Route>
                            <Route path="/logout" element={<Logout />}></Route>
                            <Route path="/users" element={<AppUser />}></Route>
                        </Route>
                    </Routes>
                    <Footer />
                </Router>
            </Context.Provider>
        </React.Fragment>
    )
}