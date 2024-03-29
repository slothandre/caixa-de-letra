import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import logoAPI from "../../assets/images/logo-tmdb.png";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <Text style={styles.subtitulo}>Sobre o app Caixa De Letra</Text>
        <Text style={styles.texto}>
          O <Text style={styles.nomeApp}>Caixa De Letra</Text> é um aplicativo
          com a finalidade de permitir a busca por informações sobre filmes
          existentes na base de dados pública disponibilizada pelo site The
          Movie Database (TMDb).
        </Text>
        <View style={styles.viewApi}>
          <Pressable
            onPress={() =>
              Linking.openURL("https://www.themoviedb.org/?language=pt-BR")
            }
          >
            <Image
              resizeMode="contain"
              source={logoAPI}
              style={styles.imagemApi}
            />
          </Pressable>
        </View>
        <Text style={styles.texto}>
          Ao localizar um filme, o usuário pode visualizar informações como
          título, data de lançamento, nota média de avaliação e uma breve
          descrição sobre o filme e, caso queira, salvar estas informações em
          uma lista no próprio aplicativo para visualização posterior.
        </Text>
        <Text style={styles.texto}>
          O aplicativo poderá receber novos recursos conforme o feedback e
          demanda dos usuários.
        </Text>
        <Text style={styles.texto}>Caixa De Letra &copy; 2024</Text>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subtitulo: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    fontWeight: "bold",
    color: "#5351a6",
  },
  viewApi: {
    alignItems: "center",
    marginVertical: 8,
  },
  imagemApi: {
    width: 160,
  },
});
