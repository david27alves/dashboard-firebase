import { useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../pages/home"
import Login from "../pages/login"
import PrivateRoutes from "./PrivateRoutes"

function AppRoutes() {

    return(
        <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={ <PrivateRoutes /> }>
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Routes>
        </Router>
    )
}

export default AppRoutes