import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "src/hook/useAuth";


export function Routes(){
    const {user} = useAuth();

    return (
        <NavigationContainer>
            {user && user.email ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}