import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
// interface
import { Movie } from "../interfaces/movieInterface";

interface Props {
  movie: Movie;
  width?: string | number;
  height?: string | number;
  isPrincipal?: boolean;
}

export const MoviePoster = ({
  movie,
  width = "100%",
  height = "95.65%",
  isPrincipal,
}: Props) => {
  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: !isPrincipal ? 2 : 0,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
      onPress={() => navigation.navigate("DetailScreen", movie)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 7,
  },
  image: { flex: 1, borderRadius: 18 },
});
