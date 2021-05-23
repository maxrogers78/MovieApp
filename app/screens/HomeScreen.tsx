import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
// hooks
import { useMovies } from "../hooks/useMovies";
// components
import { MoviePoster } from "../components/MoviePoster";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { peliculasEnCine, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      <MoviePoster movie={peliculasEnCine[0]} />
    </View>
  );
};
