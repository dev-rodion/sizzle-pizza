import {
  MD3DarkTheme as darkTheme,
  MD3LightTheme as lightTheme,
} from 'react-native-paper';
import { Appearance, View } from "react-native";

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

export default {
  ...theme,
  borderRadius: 10,
};
