import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import currencyFormatter from "currency-formatter";
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
          <Icon
            style={styles.star}
            name="star-outline"
            size={16}
            color="grey"
          />

          <Text>{movieFull.vote_average}</Text>

          <Text style={styles.separator}> - </Text>

          <Text>{movieFull.genres.map((g) => g.name).join(", ")}</Text>
        </View>

        {/* Sinópsis */}
        <Text style={styles.title}>Sinópsis</Text>
        <Text style={styles.overview}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.budget}>
          {currencyFormatter.format(movieFull.budget, { code: "USD" })}
        </Text>
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
  star: {
    marginRight: 5,
  },
  separator: {
    marginHorizontal: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  overview: {
    marginVertical: 5,
    fontSize: 13,
    textAlign: "justify",
  },
  budget: {
    marginVertical: 5,
    fontSize: 18,
  },
});
