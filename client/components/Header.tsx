import React from "react";
import { View } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { Router, useNavigation, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setShowBackButton } from "../redux/features/menuFeatureSlice";
import Layout from "../constants/Layout";

const Header = () => {
  const router: Router = useRouter();

  const showBackButton = router.canGoBack();

  const handleBackButton = () => {
    router.back();
  };

  return (
    <Appbar.Header style={{ height: Layout.headerHeight }}>
      {showBackButton && <Appbar.BackAction onPress={handleBackButton} />}
      <Appbar.Content title="" />
      {/* <Appbar.Action
        icon="login"
        onPress={() => {
          router.push("/auth/login");
        }}
      /> */}
      {/* <Avatar.Text size={40} label="XD" style={{ margin: 7 }} /> */}
    </Appbar.Header>
  );
};

export default Header;
