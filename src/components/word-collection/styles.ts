import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  word: {
    height: 50,
    backgroundColor: "#cce7ff",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedWords: {
    flexDirection: "row",
  },
  selectedWord: {
    backgroundColor: "#ffcccb",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default styles;
