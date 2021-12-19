import { useContext } from "react"
import { Context } from "../../Context/Context"

export const Loader = () => {
    const { loader } = useContext(Context);
    return (
        <p>{loader && <div>Loading...</div>}</p>
    )
}