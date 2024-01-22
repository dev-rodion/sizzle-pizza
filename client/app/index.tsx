import { AppRegistry, Text, View } from "react-native"
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Text style={{color: theme.colors.primary}}>App</Text>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('App', () => App);
// export default App;