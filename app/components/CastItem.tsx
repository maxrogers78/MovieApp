import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// interfaces
import { Cast } from "../interfaces/creditsInterface";

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={stylesContianer.castContainer}>
      {actor.profile_path && <Image source={{ uri }} style={styles.picture} />}

      <View style={stylesContianer.actorContainer}>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const stylesContianer = StyleSheet.create({
  castContainer: {
    height: 50,
    marginRight: 10,
    marginVertical: 10,
    paddingRight: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 7,
  },
  actorContainer: {
    marginLeft: 10,
  },
});

const styles = StyleSheet.create({
  picture: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  character: {
    fontSize: 16,
    opacity: 0.7,
  },
});
