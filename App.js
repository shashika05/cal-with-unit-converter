import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

// Screens
import Home from "./src/screens/Home";
import Cal from "./src/screens/Cal";
import About from "./src/screens/About";

// Nav-Buttons
import BackButton from "./src/components/buttons/BackButton";
import AboutButton from "./src/components/buttons/AboutButton";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded, error] = useFonts({
    M100: require("./assets/fonts/M100.ttf"),
    M100i: require("./assets/fonts/M100i.ttf"),
    M200: require("./assets/fonts/M200.ttf"),
    M200i: require("./assets/fonts/M200i.ttf"),
    M300: require("./assets/fonts/M300.ttf"),
    M300i: require("./assets/fonts/M300i.ttf"),
    M400: require("./assets/fonts/M400.ttf"),
    M400i: require("./assets/fonts/M400i.ttf"),
    M500: require("./assets/fonts/M500.ttf"),
    M500i: require("./assets/fonts/M500i.ttf"),
    M600: require("./assets/fonts/M600.ttf"),
    M600i: require("./assets/fonts/M600i.ttf"),
    M700: require("./assets/fonts/M700.ttf"),
    M700i: require("./assets/fonts/M700i.ttf"),
    M800: require("./assets/fonts/M800.ttf"),
    M800i: require("./assets/fonts/M800i.ttf"),
    M900: require("./assets/fonts/M900.ttf"),
    M900i: require("./assets/fonts/M900i.ttf"),
  });

  if (!loaded) {
    // When font failed to loads
    console.log("Font loads fail: ", error);
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          children={() => <Home />}
          name="Home"
          options={{
            headerLeft: () => <AboutButton />,
            headerTitle: () => (
              <Text style={{ fontFamily: "M600", fontSize: 18 }}>Home</Text>
            ),
          }}
        />
        <Stack.Screen
          children={() => <Cal />}
          name="Cal"
          options={{
            headerLeft: () => <BackButton />,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          children={() => <About />}
          name="About"
          options={{
            headerLeft: () => <BackButton />,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
