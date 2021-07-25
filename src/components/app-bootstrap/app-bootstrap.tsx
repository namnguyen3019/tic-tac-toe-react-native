import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import React, { ReactElement, ReactNode } from "react";

type AppBootStrapProps = {
  children: ReactNode;
};
function AppBootStrap({ children }: AppBootStrapProps): ReactElement {
  const [fontsLoaded] = useFonts({ Inter_900Black });

  return fontsLoaded ? <>{children}</> : <AppLoading />;
}

export default AppBootStrap;
