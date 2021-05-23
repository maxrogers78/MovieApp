import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="ir detalle"
        onPress={() => navigation.navigate("DetailScreen")}
      />
    </View>
  );
};
