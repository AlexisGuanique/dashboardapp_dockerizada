import { Navigate, Route, Routes } from "react-router-dom"
import { ViewTable } from "../components"
import { DashboardLayout } from "../layout/DashboardLayout"



export const DashboardRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={ <ViewTable /> } />
            <Route path="/*" element={ <Navigate to='/'/>} />


        </Routes>


    )
}