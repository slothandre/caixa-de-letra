import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { Ionicons } from "@expo/vector-icons";

/* Hook necessário pois não estamos em uma tela com acesso à prop navigation */
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardFilme({ filme }) {
  const { title, poster_path } = filme;
  const navigation = useNavigation();

  const salvar = async () => {
    // Alert.alert("Favoritos", "Salvando...");

    try {
      /* 1) Verificar/carregar os favoritos armazenados no AsyncStorage.
      Usamos o getItem do AsyncStorage para analisar se existe um armazenamento
      com o nome indicado (@favoritoscaixadeletra). Existindo, ele é carregado para
      a const filmesFavoritos. Se não existir, será criado posteriormente. */
      const filmesFavoritos = await AsyncStorage.getItem(
        "@favoritoscaixadeletra"
      );

      /* 2) Verificar/criar uma lista de filmes favoritos (dados) */
      /* 3) Verificar se já tem algum filme na lista */
      /* 4) Se o filme não estiver na lista, então vamos colocá-lo */
      /* 5) Usamos o AsyncStorage para gravar no armazenamento offline do dispositivo */
    } catch (error) {
      console.log("Erro: " + error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o filme...");
    }
  };

  return (
    <View style={styles.card}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={styles.corpo}>
        <Text style={styles.titulo}>{title}</Text>
        <View style={styles.botoes}>
          <Pressable
            style={styles.botao}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Text style={styles.textoBotao}>
              <Ionicons name="book" size={12} /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={salvar}>
            <Text style={styles.textoBotao}>
              <Ionicons name="add-circle" size={12} /> Salvar
            </Text>
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
