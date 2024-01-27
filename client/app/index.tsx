import { Link } from "expo-router";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Layout } from "../constants";

const App = () => {
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: Layout.height,
        }}
      >
        <Text variant="displayMedium">Home Page</Text>
        <Link href="/auth/register">
          <Text variant="bodyLarge">Login</Text>
        </Link>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;
