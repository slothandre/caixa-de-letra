import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import styles from "./src/stylesheets/styles";
import logo from "./assets/images/logo.png";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.viewLogo}>
          <Image source={logo} style={styles.logo} />
          <Text>Caixa de Letra</Text>
        </View>
        <View style={styles.viewBotoes}>
          <Pressable onPress={() => console.log("oi")}>
            <Text>Buscar Filmes</Text>
          </Pressable>
          <Pressable>
            <Text>Favoritos</Text>
          </Pressable>
        </View>
        <View style={styles.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}
