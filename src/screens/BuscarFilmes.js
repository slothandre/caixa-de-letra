import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";

export default function BuscarFilmes() {
  const [text, onChangeText] = React.useState("");

  const pesquisar = () => {
    if (text === "") {
      Vibration.vibrate(1000);
      Alert.alert("Ops!", "Você deve digitar um filme");
    } else {
      Vibration.vibrate(1000);
      Alert.alert("Você procurou por:", `${text}`);
    }
  };

  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <Text>Star Trek? O Poderoso Chefão? A trilogia Senhor dos Aneis?</Text>
        <Text>Localize um filme que você viu ou gostaria de ver!</Text>
        <View style={styles.viewForm}>
          <Ionicons name="film-sharp" size={48} color="#5451a6" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Digite o filme"
          />
        </View>
        <Button title="Pesquisar" color="#5451a6" onPress={pesquisar} />
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    color: "#5451a6",
    borderColor: "#5451a6",
  },
  viewForm: {
    flexDirection: "row",
    alignItems: "center",
  },
});
