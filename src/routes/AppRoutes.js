import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRotes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";



export const AppRoutes = () => {
    
    const status = 'authenticated';
    // const status = 'no-authenticated';

    
    
    return (
        <Routes>
{/* 
            {
                (status === 'authenticated')
                ? <Route path="/*" element={ <DashboardRoutes /> } />
                : <Route path="/auth/*" element={<AuthRoutes />} />
            } */}

            <Route path="/*" element={ <DashboardRoutes /> } />
            <Route path="/auth/*" element={<AuthRoutes />} />

            <Route path="/*" element={ <Navigate to='/auth/login' />} />


        </Routes>
    )
}