import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
      <View style={styles.corpo}>
        <Text style={styles.titulo}>{title}</Text>
        <View style={styles.botoes}>
          <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>Leia mais</Text>
          </Pressable>
          <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#5451a6",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 100,
    flex: 1,
  },
  corpo: {
    flex: 2,
  },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    borderColor: "#5451a6",
    borderWidth: 1,
    padding: 8,
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
