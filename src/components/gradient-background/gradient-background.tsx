import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode } from "react";
import { View } from "react-native";

type GradientBackGroundProps = {
  children: ReactNode;
};
const GradientBackGround = ({ children }: GradientBackGroundProps) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#120318", "#221a36"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      {children}
    </View>
  );
};

export default GradientBackGround;
