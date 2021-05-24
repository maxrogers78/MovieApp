import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// interfaces
import { MovieFull } from "../interfaces/movieInterface";
import { Cast } from "../interfaces/creditsInterface";

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={stylesContainer.detailsContainer}>
        <View style={stylesContainer.ratingContainer}>
          <Icon name="star-outline" size={16} color="grey" />

          <Text>{movieFull.vote_average}</Text>

          <Text style={styles.separator}> - </Text>

          <Text>{movieFull.genres.map((g) => g.name).join(", ")}</Text>
        </View>
      </View>

      {/* Casting */}
    </>
  );
};

const stylesContainer = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
  },
  ratingContainer: {
    flexDirection: "row",
  },
});

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: 5,
  },
});
