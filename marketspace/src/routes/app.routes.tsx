
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home"
import { MyAdds } from "@screens/MyAdds"

import {House,Tag,SignOut} from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";
import { Add } from "@screens/Add";
import { config } from "config/gluestack-ui.config";

type AppRoutesProps = {
    Home: undefined,
    Add: undefined,
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
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: config.tokens.colors.produtoBlue,
                tabBarInactiveTintColor: config.tokens.colors.baseGray2,
                tabBarStyle: {
                    backgroundColor: config.tokens.colors.baseGray6,
                }
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
                    component={MyAdds} 
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
            <Screen name="Add" 
                    component={Add}
                    options={{
                        tabBarStyle:{
                            display: "none"
                        },
                        tabBarButton: () => null
                    }} 
            />

        </Navigator>
    )
}