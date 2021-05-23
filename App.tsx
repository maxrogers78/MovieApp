import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// navigation
import { Navigation } from "./app/navigation/Navigation";

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
