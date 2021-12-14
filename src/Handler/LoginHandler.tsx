import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../Action/LoginAction";
import AppRequest from "../Service/AppRequest";

const LoginHandler = () => {
    const [user, setUser] = useState({ username: "admin", password: "admin@12" });
    const { request } = AppRequest();
    const [apiResponse, setApiResponse] = useState({});
    const dispatch = useDispatch();
    const hanldeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let data: any = await request(`/users?username=${user.username}&password=${user.password}`);
        if (data.length) {
            localStorage.setItem('user', JSON.stringify(data[0]));
            setApiResponse(data[0]);
            dispatch(LoginAction(data[0]));
            return data;
        }
        alert("No User Found!");
    }
    return { hanldeChange, handleLogin, user, apiResponse }
}
export default LoginHandler;