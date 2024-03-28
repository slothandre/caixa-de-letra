import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import SafeContainer from "../components/SafeContainer";
import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.titulo}>Caixa De Letra</Text>
      </View>

      <View style={styles.viewBotoes}>
        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate("BuscarFilmes")}
        >
          <Text style={styles.textoBotao}>
            <Ionicons name="search" size={12} color="white" />
            Buscar Filmes
          </Text>
        </Pressable>
        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate("Favoritos")}
        >
          <Text style={styles.textoBotao}>
            <Ionicons name="star" size={12} color="gold" />
            Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={styles.viewRodape}>
        <Pressable
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Privacidade")}
        >
          <Text style={styles.textoBotao}>
            <Ionicons name="lock-closed" size={16} color="white" />
            Privacidade
          </Text>
        </Pressable>
        <Pressable
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Sobre")}
        >
          <Text style={styles.textoBotao}>
            <Ionicons name="information-circle" size={16} color="white" />
            Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  viewLogo: {
    flex: 3,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 30,
    color: "#5a51a6",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
    justifyContent: "space-evenly",
  },
  botao: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    fontFamily: "NotoSans",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  viewRodape: {
    width: "100%",
    backgroundColor: "#5451a6",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoRodape: {
    padding: 16,
  },
});
