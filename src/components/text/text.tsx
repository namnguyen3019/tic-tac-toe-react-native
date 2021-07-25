import React, { ReactElement, ReactNode } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type TextProps = {
  weight: "400" | "700";
  children: ReactNode;
} & NativeTextProps;
const defaultProps = {
  weight: "400",
};
// Declare a function that return a element
function Text({ children, style, ...props }: TextProps): ReactElement {
  return (
    <NativeText {...props} style={[{ fontFamily: "Inter_900Black" }, style]}>
      {children}
    </NativeText>
  );
}

Text.defaultProps = defaultProps;
export default Text;
