import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },
  viewLogo: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "green",
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "orange",
    flex: 0.4,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  viewRodape: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "red",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
