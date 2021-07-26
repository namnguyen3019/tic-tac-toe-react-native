import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { ReactElement } from "react";
import { Home, SingleGamePlayer } from "../screens/index";

export type StackNavigatorParams = {
  Home: undefined;
  SingleGamePlayer: undefined;
};
const Stack = createStackNavigator<StackNavigatorParams>();
export default function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SingleGamePlayer" component={SingleGamePlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
