import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function Favoritos() {
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <View style={styles.viesFavoritos}>
          <Text style={styles.texto}>Favoritos...</Text>
        </View>
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
  texto: {
    marginVertical: 8,
  },
});
