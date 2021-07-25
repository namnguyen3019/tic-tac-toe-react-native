import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { ReactElement } from "react";
import { Game, Home } from "../screens/index";

export type StackNavigatorParams = {
  Home: undefined;
  Game: {
    gameId: string;
  };
};
const Stack = createStackNavigator<StackNavigatorParams>();
export default function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
