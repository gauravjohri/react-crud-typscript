import { useContext } from "react";
import { Context } from "../Context/Context";

const AppRequest = () => {
    const { loader, setLoader } = useContext(Context);
    const request = async (url: string, method: string = 'GET', body?: any) => {
        setLoader(true);
        let bodyParams: any = {
            headers: {
                'content-type': 'application/json'
            },
            method: method
        }
        if (!["GET"].includes(method)) {
            bodyParams.body = JSON.stringify(body);
        }
        try {
            let data: any = await fetch(`http://localhost:3000${url}`, bodyParams);
            data = await data.json();
            setLoader(false);
            return data;
        }
        catch (error: any) {
            throw error.message;
        }
    }
    return { request }
}
export default AppRequest;