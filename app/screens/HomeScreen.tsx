import React, { useEffect } from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
// hooks
import { useMovies } from "../hooks/useMovies";
// components
import { MoviePoster } from "../components/MoviePoster";

const { width: windowWidth } = Dimensions.get("window");

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
      <View style={{ height: 440 }}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
