import React from 'react';
import {View } from 'react-native';
import {HomeScreen, ProfileScreen, SettingScreen, LoginScreen, ProdutosScreen} from './src/components/screens';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';



//renderiza o conteudo do Menu lateral
const myDrawerNavigator = createDrawerNavigator (
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Profile: ProfileScreen,
    Setting: SettingScreen,
    produtos: ProdutosScreen,
  },
  {
    drawerContentOptions: {
      activeTintColor: 'black',
      labelStyle: {
        fontSize: 20,
      }
    }
  }
)

export default createAppContainer(myDrawerNavigator);
