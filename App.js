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
import { Ionicons } from "@expo/vector-icons";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

/* Manter a tela splash visível enquanto não
programarmos a ação de ocultar */
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("./assets/fonts/NotoSans-VariableFont.ttf"),
  });

  /* Função atrelada ao hook useCallback.
  Quando uma função está conectada ao useCallback, garantimos
  que a referência dela é armazenada na memória somente uma vez. */
  const aoAtualizarLayout = useCallback(async () => {
    /* Se estiver tudo ok com o carregamento */
    if (fontsLoaded || fontError) {
      /* Escondemos a splashscreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container} onLayout={aoAtualizarLayout}>
        <View style={styles.viewLogo}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.titulo}>Dá Hora Filmes</Text>
        </View>

        <View style={styles.viewBotoes}>
          <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>
              <Ionicons name="search" size={12} color="white" />
              Buscar Filmes
            </Text>
          </Pressable>
          <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>
              <Ionicons name="star" size={12} color="gold" />
              Favoritos
            </Text>
          </Pressable>
        </View>

        <View style={styles.viewRodape}>
          <Pressable style={styles.botaoRodape}>
            <Text style={styles.textoBotao}>
              <Ionicons name="lock-closed" size={16} color="white" />
              Privacidade
            </Text>
          </Pressable>
          <Pressable style={styles.botaoRodape}>
            <Text style={styles.textoBotao}>
              <Ionicons name="information-circle" size={16} color="white" />
              Sobre
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}
