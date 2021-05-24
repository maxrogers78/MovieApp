import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// interfaces & types
import { RootStackParams } from "../navigation/Navigation";

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

export const DetailScreen = ({ route }: Props) => {
  const { top } = useSafeAreaInsets();
  const { original_title } = route.params;

  return (
    <View style={{ marginTop: top }}>
      <Text>Detail Screen</Text>
      <Text>{original_title}</Text>
    </View>
  );
};
