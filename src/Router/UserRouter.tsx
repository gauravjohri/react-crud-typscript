import { useLocation } from "react-router"
import { Navigate, Outlet } from "react-router"

export const UserRouter = (props: any) => {
    const location = useLocation();
    if (Object.keys(props.user.user).length === 0 && !["/login", "/signup"].includes(location.pathname)) {
        return <Navigate to="/login" />
    }
    if (Object.keys(props.user.user).length > 0 && ["/login", "/signup"].includes(location.pathname)) {
        return <Navigate to="/" />
    }
    return <Outlet />;
}