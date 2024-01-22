import { Stack } from "expo-router";
import { SafeAreaView, View } from "react-native"
import { Text } from "react-native-paper";


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="displayMedium">Home Page</Text>
    </SafeAreaView>
  );
}

export default App;