import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import johnTravolta from "../../assets/images/john-travolta-confuso.png";

export default function ListaVazia() {
  return (
    <View style={styles.viewListaVazia}>
      <Image resizeMode="cover" style={styles.image} source={johnTravolta} />
      <Text>Parece que não existe nenhum filme com este nome...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewListaVazia: {},
  image: {
    width: 293,
    height: 300,
  },
});
