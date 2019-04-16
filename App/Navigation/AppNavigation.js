import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "LaunchScreen",
    defaultNavigationOptions: () => ({
      headerStyle: styles.header,
      gesturesEnabled: false,
      drawerLockMode: "locked-closed"
    })
  }
);

const Drawer = createDrawerNavigator({
  main: PrimaryNav
});

export default createAppContainer(Drawer);
