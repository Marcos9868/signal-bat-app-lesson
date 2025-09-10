import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 30
  },
  button: {
    width: 250,
    height: 35,
    borderRadius: 6,
    backgroundColor: "#222222",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#f5f5f5",
    marginTop: 8
  }
});