import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
// hooks
import { useMovies } from "../hooks/useMovies";
// components
import { MoviePoster } from "../components/MoviePoster";
import { HorizontalSlider } from "../components/HorizontalSlider";

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
    <ScrollView style={{ marginTop: top }}>
      <View style={{ paddingTop: top }}>
        {/* Carousel Principal */}
        <View style={{ height: 440, paddingBottom: top }}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({ item }: any) => (
              <MoviePoster movie={item} isPrincipal />
            )}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 60}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Películas populares */}
        <HorizontalSlider title="Populares" movies={peliculasEnCine} />
      </View>
    </ScrollView>
  );
};
