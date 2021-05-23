import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// interface
import { Movie } from "../interfaces/movieInterface";

interface Props {
  movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={{ width: 320, height: 400 }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </View>
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
