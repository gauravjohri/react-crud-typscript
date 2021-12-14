import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export const Navigation = () => {
    const user = useSelector((state: any) => state.login);
    return (
        <React.Fragment>
            <div style={{ display: (Object.keys(user.user).length > 0) ? 'block' : 'none' }}>
                <Link to={`/`}>Home</Link>
                <Link to={`/users`}>User List</Link>
            </div>
            <div style={{ display: (Object.keys(user.user).length === 0) ? 'block' : 'none' }}>
                <Link to={`/login`}>Login</Link>
                <Link to={`/signup`}>SignUp</Link>
            </div>
        </React.Fragment>
    )
}