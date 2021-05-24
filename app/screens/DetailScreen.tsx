import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// hooks
import { useMovieDetails } from "../hooks/useMovieDetails";
// interfaces & types
import { RootStackParams } from "../navigation/Navigation";
// components
import { MovieDetails } from "../components/MovieDetails";

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

const { height: screenHeight } = Dimensions.get("screen");

export const DetailScreen = ({ route }: Props) => {
  const { top } = useSafeAreaInsets();

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={{ ...styles.imageContainer, marginTop: top }}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.posterImage}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="grey" style={{ marginTop: 10 }} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 7,

    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: "hidden",
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
