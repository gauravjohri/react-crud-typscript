import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const WelcomeMsg = () => {
    const loginState = useSelector((state: any) => state.login);
    return (
        <div style={{ display: (Object.keys(loginState.user).length === 0) ? 'none' : 'block' }}>Welcome <span style={{ textTransform: 'capitalize' }}>{loginState.user.username || ''}</span>!<Link to={`/logout`}>Logout</Link></div>
    )
}