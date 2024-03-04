import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function BuscarFilmes({ navigation }) {
  const [filme, setFilme] = useState("");

  /* Capturando e registrando em state
  o filme que o usuário deseja pesquisar */
  const filmeDigitado = (valorDigitado) => {
    /* valorDigitado (nome pode ser qualquer um) 
    é um parâmetro automático vindo do evento onChangeText */
    setFilme(valorDigitado);
  };

  const buscarFilmes = () => {
    /* Se o state filme não foi definido/indicado/preenchido */
    if (!filme) {
      Vibration.vibrate(500);
      return Alert.alert("Ops!", "Você deve digitar um filme!");
    }

    /* Redirecionamento para a tela de Resultados passando
    o filme para ela */
    navigation.navigate("Resultados", { filme });
  };

  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <Text style={styles.texto}>
          Star Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?
        </Text>
        <Text style={styles.texto}>
          Localize um filme que você viu ou gostaria de ver!
        </Text>

        <View style={styles.viewForm}>
          <Ionicons name="film" size={44} color="#5451a6" />
          <TextInput
            onChangeText={filmeDigitado}
            onSubmitEditing={buscarFilmes}
            style={styles.campo}
            placeholder="Digite o filme"
            placeholderTextColor="#5451a6"
            maxLength={30}
            autoFocus
            enterKeyHint="search"
          />
        </View>
        <Button onPress={buscarFilmes} title="Procurar" color="#5451a6" />
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
  viewForm: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  campo: {
    flex: 0.95,
    borderWidth: 1,
    borderColor: "#5451a6",
    padding: 8,
  },
});
