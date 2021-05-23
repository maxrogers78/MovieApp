import React, { useEffect } from "react";
import { View, Text } from "react-native";
// interfaces
import { MovieDBNowPlaying } from "../interfaces/movieInterface";
// api
import movieDB from "../api/movieDB";

export const HomeScreen = () => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>("/now_playing").then((resp) => {
      console.log(resp.data.results[0].title);
    });
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
