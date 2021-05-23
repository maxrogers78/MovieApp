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
      <View style={{ paddingTop: top, backgroundColor: "red" }}>
        {/* Carousel Principal */}
        <View style={{ height: 440, paddingBottom: top }}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({ item }: any) => (
              <MoviePoster movie={item} isPrincipal />
            )}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 60}
            style={{}}
          />
        </View>

        {/* Películas populares */}
        <View style={{ backgroundColor: "#fdd131", height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Populares</Text>
          <FlatList
            data={peliculasEnCine}
            renderItem={({ item }: any) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
