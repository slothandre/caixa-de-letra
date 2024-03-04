import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

/* Prop route
Prop especial e definida pelo React Navigation.
Através dela que é possível acessar valores passados
por meio de navegação entre telas. */
export default function Resultados({ route }) {
  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <Text style={styles.texto}>Você buscou por: {filme}</Text>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  texto: {
    marginVertical: 8,
  },
});
