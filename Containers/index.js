import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import HomeScreem from '../Pages/Home';
import TableScreen from '../Pages/Table';
import NavigateScreen from '../Pages/Navigate';
import ContactScreen from '../Pages/Contact';
import LoginScreen from '../Pages/Login';
import RegisterScreen from '../Pages/Register';
import ForgotPasswordScreen from '../Pages/ForgotPassword';
//#region Component
import InfoTableScreen from '../Components/Table/InfoTable/InfoTable';
import InfoUserScreen from '../Components/Contact/InfoUser/infoUser';
//#endregion

//#region Home
const HomeStack = createStackNavigator(
    {
        Home: HomeScreem
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });
//#endregion

//#region Table
const TableStack = createStackNavigator(
    {
        Table: TableScreen,
        InfoTable: InfoTableScreen
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
//#endregion

//#region Navigate
const NavigateStack = createStackNavigator(
    {
        Navigate: NavigateScreen
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });
//#endregion

//#region Contact
const ContactStack = createStackNavigator(
    {
        Contact: ContactScreen,
        InfoUser: InfoUserScreen
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });
//#endregion

//#region Login
const LoginStack = createStackNavigator(
    {
        Login: LoginScreen
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
//#endregion

//#region App
const AppStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Table: TableStack,
        Navigate: NavigateStack,
        Contact: ContactStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Icon;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'pizza';
                } else if (routeName === 'Table') {
                    iconName = 'grid';
                } else if (routeName === 'Navigate') {
                    iconName = 'navigate';
                } else if (routeName === 'Contact') {
                    iconName = 'contact';
                }
                return (
                    <IconComponent name={iconName} fontSize={20} style={{ color: focused ? '#000000' : tintColor }} />
                );
            },
        }),
        tabBarOptions: {
            activeTintColor: '#000000',
            inactiveTintColor: '#9e9e9e',
            style: {
                backgroundColor: '#eeeeee',
            }
        },
    }
)
//#endregion

//#region Main
const Main = createStackNavigator(
    {
        Login: LoginStack,
        Register: RegisterScreen,
        ForgotPassword: ForgotPasswordScreen,
        App: AppStack
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
//#endregion


export default createAppContainer(Main);