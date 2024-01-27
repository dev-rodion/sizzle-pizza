// styles.ts
import { StyleSheet } from "react-native";
import { Colors, FontSize, Layout } from "../../constants";

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
    color: Colors.primary,
    textAlign: "center",
    fontSize: FontSize.xxLarge,
  },
  bodyText: {
    textAlign: "center",
    fontSize: FontSize.large,
    fontWeight: "700",
    color: Colors.onBackground,
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
  },
  registerButton: {
    flex: 1,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
