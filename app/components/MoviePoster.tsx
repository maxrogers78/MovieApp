import React from "react";
import { StyleSheet, View, Image } from "react-native";
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
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={{ width, height, marginHorizontal: !isPrincipal ? 8 : 0 }}>
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
