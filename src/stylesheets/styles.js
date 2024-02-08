import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    width: "90%",
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  viewBotoes: {
    width: "90%",
    flex: 0.4,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  botao: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    color: "#fff",
  },
  viewRodape: {
    width: "90%",
    backgroundColor: "red",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
