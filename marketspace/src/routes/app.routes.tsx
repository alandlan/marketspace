
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
	createStackNavigator,
	StackNavigationProp,
} from '@react-navigation/stack';

import { Home } from "@screens/Home"
import { MyAds } from "@screens/MyAds"

import {House,Tag,SignOut} from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";
import { Ad } from "@screens/Ad";
import { config } from "config/gluestack-ui.config";

type AppRoutesProps = {
    Home: undefined,
    Ad: undefined,
    MyAds: undefined,
    Exit: undefined
}

type StackAppRoutes = {
	Main: undefined;
	Ad: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;
export type AppStackNavigatorRoutesProps = StackNavigationProp<StackAppRoutes>;

const {Navigator,Screen} = createBottomTabNavigator<AppRoutesProps>();

const Stack = createStackNavigator<StackAppRoutes>();

function TabRoutes(){

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
            <Screen name="MyAds" 
                    component={MyAds} 
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

            <Screen name="Ad" 
                    component={Ad}
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

export function AppRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Main" component={TabRoutes} />
			<Stack.Screen name="Ad" component={Ad} />
		</Stack.Navigator>
	);
}