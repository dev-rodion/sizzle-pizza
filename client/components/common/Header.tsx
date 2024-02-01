import React from "react";
import { Appbar, Avatar } from "react-native-paper";
import { Router, useRouter } from "expo-router";
import { Layout } from "../../constants";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header = () => {
  const router: Router = useRouter();

  const { avatarUrl } = useSelector((state: RootState) => state.userFeature);
  console.log(avatarUrl); // https://i.pravatar.cc/150?img=3

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
    </Appbar.Header>
  );
};

export default Header;
