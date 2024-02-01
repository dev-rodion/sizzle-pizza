import { StyleSheet } from "react-native";
import { Colors, FontSize } from "../constants";

export default StyleSheet.create({
  formWrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: Colors.primary,
    fontWeight: "700",
    fontSize: FontSize.medium,
    marginTop: 25,
  },
  button: {
    marginTop: 30,
  },
  buttomLink: {
    textAlign: "center",
    color: Colors.secondary,
    marginTop: 30,
    marginBottom: 30,
  },
  bottomLinkText: {
    fontWeight: "700",
    fontSize: FontSize.medium,
  },
  loadingWrapper: {
  },
});
