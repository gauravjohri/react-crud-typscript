import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { LoginAction } from "../Action/LoginAction";

export const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LoginAction({}));
        localStorage.removeItem('user');
    }, [])
    return (
        <div>Logout</div>
    )
}