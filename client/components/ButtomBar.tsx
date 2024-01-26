import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Music</Text>;

const CartRoute = () => <Text>Albums</Text>;

const HistoryRoute = () => <Text>Recents</Text>;

const SettingsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    { key: 'cart', title: 'Cart', focusedIcon: 'cart' },
    { key: 'history', title: 'History', focusedIcon: 'history' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    cart: CartRoute,
    history: HistoryRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;