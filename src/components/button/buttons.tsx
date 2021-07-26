import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Text } from "../../components";
import styles from "./buttons.styles";
type ButtonProps = {
  title: string;
} & TouchableOpacityProps;
const Button = ({ title }: ButtonProps): ReactElement => {
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
