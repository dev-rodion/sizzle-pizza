import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PaperProvider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/Colors";
import Theme from "../constants/Theme";
import Layout from "../constants/Layout";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../components/Header";
import { decode } from "base-64";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import {
  IStateUserFeature,
  setToken,
  setUserData,
} from "../redux/features/userFeatureSlice";

const AppLayout = () => {
  global.atob = decode;

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("userToken");
      if (token) {
        const decodedToken: { _id: string; email: string; username: string, exp: number, iat: number } =
          jwtDecode(token);
        store.dispatch(setToken(token));
        const userData: IStateUserFeature = {
          _id: decodedToken._id,
          email: decodedToken.email,
          username: decodedToken.username,
          token: token,
        };
        store.dispatch(setUserData(userData));
      }
    };
    checkToken();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider theme={Theme}>
          <Tabs
            screenOptions={{
              headerTitle: "",
              header: () => <Header />,
              tabBarActiveTintColor: colors.primary,
              tabBarInactiveTintColor: colors.onBackground,
              tabBarStyle: {
                height: Layout.tabBarHeight,
                backgroundColor: colors.background,
                borderTopColor: colors.backdrop,
              },
              tabBarItemStyle: {
                borderRadius: 20,
                marginHorizontal: 5,
              },
              tabBarIconStyle: {
                marginTop: 10,
              },
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "700",
                marginBottom: 10,
              },
            }}
          >
            <Tabs.Screen
              name="index"
              options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="home" color={color} size={30} />
                ),
              }}
            />
            <Tabs.Screen
              name="auth"
              options={{
                title: "Account",
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons
                    name="account-circle"
                    color={color}
                    size={30}
                  />
                ),
              }}
            />
          </Tabs>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default AppLayout;
