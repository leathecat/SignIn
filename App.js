import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";

// const Auth = createStackNavigator({
//   SignIn: SignInScreen
// });

// const App = createBottomTabNavigator({
//   Home: HomeScreen,
//   Search: SearchScreen,
//   Profile: ProfileScreen
// });

// const Root = createSwitchNavigator({
//   Auth: Auth,
//   App: App
// });

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;

//<HomeScreen />
// <ProfileScreen />
// <SearchScreen />
