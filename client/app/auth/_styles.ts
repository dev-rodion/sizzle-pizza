// styles.ts
import { StyleSheet } from "react-native";
import FontSize from "../../constants/FontSize";
import colors from "../../constants/Colors";
import Theme from "../../constants/Theme";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    paddingBottom: 75,
  },
  image: {
    height: Layout.height / 2.5,
    marginTop: 20,
  },
  headline: {
    marginTop: 20,
    fontWeight: "700",
    // fontFamily: 'Mon',
    color: colors.primary,
    textAlign: "center",
    fontSize: FontSize.xxLarge,
  },
  bodyText: {
    textAlign: "center",
    fontSize: FontSize.large,
    fontWeight: "700",
    color: colors.onBackground,
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
  },
  button: {
    flex: 1,
    borderRadius: Theme.borderRadius,
    padding: 0,
    height: 50,
  },
  buttonLabel: {
    fontWeight: "700",
    fontSize: FontSize.large,
    padding: 0,
    lineHeight: 30,
  },
  registerButton: {
    flex: 1,
  },
  formWrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 20,
    fontSize: FontSize.medium,
  },
  inputOutline: {
    borderRadius: Theme.borderRadius,
    backgroundColor: Colors.surfaceVariant,
    padding: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: Colors.primary,
    fontWeight: "700",
    fontSize: FontSize.medium,
    marginBottom: 30,
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

  }
});

export default styles;
