import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"

import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type AuthRoutesParams = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigationProps = NativeStackNavigationProp<AuthRoutesParams>;

const {Navigator,Screen} = createNativeStackNavigator<AuthRoutesParams>();

export function AuthRoutes(){
    return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="signIn" component={SignIn}/>
            <Screen name="signUp" component={SignUp}/> 
        </Navigator>
    )
}