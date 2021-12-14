const AppRequest = () => {
    const request = async (url: string, method: string = 'GET', body?: any) => {
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
            return await data.json();
        }
        catch (error: any) {
            throw error.message;
        }
    }
    return { request }
}
export default AppRequest;