
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home"
import { Announcements } from "@screens/Announcements"

import {House,Tag,SignOut} from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";

type AppRoutesProps = {
    Home: undefined,
    Announcements: undefined,
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const {Navigator,Screen} = createBottomTabNavigator();

export function AppRoutes(){

    const {signOut} = useAuth();

    async function handleSignOut(){
        await signOut();
    }

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" 
                    component={Home} 
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <House color={color} size={size} />
                        )
                    }}
            />
            <Screen name="Announcements" 
                    component={Announcements} 
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <Tag color={color} size={size} />
                        )
                    }}
            />
            <Screen name="Exit"
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <SignOut color={color} size={size} />
                        ),
                        tabBarButton: (props) => (
                            <TouchableOpacity {...props} onPress={handleSignOut} />
                        ),
                    }}
            >
                {() => null}
            </Screen>

        </Navigator>
    )
}