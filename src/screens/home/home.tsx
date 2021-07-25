import { StackNavigationProp } from "@react-navigation/stack";
import React, { ReactElement } from "react";
import { Button, ScrollView, Text } from "react-native";
import GradientBackGround from "../../components/gradient-background/gradient-background";
import { StackNavigatorParams } from "../../config/navigator";
import styles from "./home.styles";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};
export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradientBackGround>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>hi from home</Text>
        <Button
          title="Game"
          onPress={() => navigation.navigate("Game", { gameId: "12312" })}
        />
      </ScrollView>
    </GradientBackGround>
  );
}
