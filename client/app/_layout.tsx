import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { BottomBar, TopBar } from "../components";


const Layout = () => {
  return (
    <View style={{flex: 1}}>
      <TopBar title="Home" />
      <Stack />
      <BottomBar />
    </View>
  )
}

export default Layout;