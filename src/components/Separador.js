import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Separador() {
  return (
    <View style={styles.viewSeparador}>
      <MaterialCommunityIcons name="movie-roll" size={12} color="#5451a6" />
      <MaterialCommunityIcons name="movie-roll" size={12} color="#5451a6" />
      <MaterialCommunityIcons name="movie-roll" size={12} color="#5451a6" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewSeparador: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    opacity: 0.5,
  },
});
