import { StackNavigationProp } from "@react-navigation/stack";
import React, { ReactElement } from "react";
import { Image, ScrollView, View } from "react-native";
import { Button } from "../../components";
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
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <View>
          <Button title="Single Player" />
          <Button title="Multiple Player" />
          <Button title="Login" />
          <Button title="Settings" />
        </View>
      </ScrollView>
    </GradientBackGround>
  );
}
