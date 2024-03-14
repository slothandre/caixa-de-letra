import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos() {
  /* State para registrar os dados carregados do storage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar
  na tela Favoritos (portanto, somente uma vez) */
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        /* Acessamos o storage criado previamente e guardamos
        as strings de dados. */
        const dados = await AsyncStorage.getItem("@favoritoscaixadeletra");

        /* Se houver dados, transformamos em objetos (JSON.parse)
        e atualizamos o state com a lista de favoritos */
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.error("Erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar os dados.");
      }
    };
    carregarFavoritos();
  }, []);

  // Log no state
  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <View style={styles.viewFavoritos}>
          <Text style={styles.texto}>Quantidade: {listaFavoritos.length}</Text>

          <Pressable style={styles.botaoExcluirFavoritos}>
            <Text style={styles.textoBotao}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View style={styles.item} key={filme.id}>
                <Pressable style={styles.botaoFilme}>
                  <Text style={styles.titulo}>{filme.title}</Text>
                </Pressable>
                <Pressable style={styles.botaoExcluir}>
                  <Ionicons name="trash" size={16} />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  viewFavoritos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  texto: {
    marginVertical: 8,
  },
  botaoExcluirFavoritos: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  textoBotao: {
    color: "red",
  },
});
