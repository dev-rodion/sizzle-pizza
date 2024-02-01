import React from "react";
import { Appbar } from "react-native-paper";
import { Router, useRouter } from "expo-router";
import { Layout } from "../../constants";

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
