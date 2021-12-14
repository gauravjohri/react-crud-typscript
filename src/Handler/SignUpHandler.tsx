import React, { useState } from "react";
import AppRequest from "../Service/AppRequest";

const SignUpHandler = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const [apiResponse, setApiResponse] = useState({});
    const { request } = AppRequest();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let data: any = await request(`/users`, 'POST', user);
        console.log(data);
        setApiResponse(data)
    }
    return { handleChange, handleSignUp, user, apiResponse };
}
export default SignUpHandler;