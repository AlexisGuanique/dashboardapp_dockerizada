import { DashboardLayout } from "./dashboard/layout/DashboardLayout";
import { AppRoutes } from "./routes/AppRoutes";
import { AppTheme } from "./theme/AppTheme";


export const DashboardApp = () => {

    return (
        
        <AppTheme>
            <AppRoutes />
        </AppTheme>
    )
}