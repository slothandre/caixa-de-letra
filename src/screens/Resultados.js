import { FlatList, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
import CardFilme from "../components/CardFilme";
import Separador from "../components/Separador";
import NaoEncontrado from "../components/NaoEncontrado";

/* Prop route
Prop especial e definida pelo React Navigation.
Através dela que é possível acessar valores passados
por meio de navegação entre telas. */
export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca na API */
  const [resultados, setResultados] = useState([]);

  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        });
        setResultados(resposta.data.results);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <Text style={styles.texto}>Você buscou por: {filme}</Text>
        <View style={styles.viewFilmes}>
          <FlatList
            data={resultados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            ItemSeparatorComponent={Separador}
            ListEmptyComponent={NaoEncontrado}
          />
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  viewFilmes: {
    marginVertical: 8,
  },
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  texto: {
    marginVertical: 8,
  },
});
