
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home"
import { Announcements } from "@screens/Announcements"
import { SignIn } from "@screens/SignIn";

import {House,Tag,SignOut} from 'phosphor-react-native';

type AppRoutesProps = {
    Home: undefined,
    Announcements: undefined,
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const {Navigator,Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return (
        <Navigator>
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
                    component={SignIn}
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <SignOut color={color} size={size} />
                        )
                    }}
            />

        </Navigator>
    )
}