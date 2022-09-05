import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { ContextAuth } from "../contexts/contextAuth"


function PrivateRoutes() {

    const { logged } = useContext(ContextAuth)

    return logged ? <Outlet /> : <Navigate to="/" />

}


export default PrivateRoutes