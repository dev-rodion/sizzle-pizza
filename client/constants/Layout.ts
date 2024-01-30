import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const headerHeight: number = 70;
const tabBarHeight: number = 70;

const Layout = () => {
  // const insets = useSafeAreaInsets();

  const width: number = Dimensions.get("window").width;
  const height: number = Dimensions.get("window").height - headerHeight - tabBarHeight // - insets.top - insets.bottom;

  return {
    width,
    height,
    headerHeight,
    tabBarHeight,
    isSmallDevice: width < 375,
  };
};

export default Layout();
