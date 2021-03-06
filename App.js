import React, { useState } from "react";
import { Text, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

// Screens
import Home from "./src/screens/Home";
import Cal from "./src/screens/Cal";
import About from "./src/screens/About";
import Converter from "./src/screens/Converter";

// Nav-Buttons
import BackButton from "./src/components/buttons/BackButton";
import AboutButton from "./src/components/buttons/AboutButton";

const Stack = createNativeStackNavigator();
export default function App() {
  // useState for converter last state
  // const [conversion, setConversion] = useState("area");
  // Used useFonts hook to use custom fonts
  const [loaded] = useFonts({
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
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          children={() => (
            <>
              <Home />
              <StatusBar backgroundColor="black" barStyle="dark-content" />
            </>
          )}
          name="Home"
          options={{
            headerLeft: () => <AboutButton calAlert={false} />,
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTransparent: false,
            statusBarStyle: "dark",
            headerTitle: () => (
              <Text style={{ fontFamily: "M700", fontSize: 20 }}>Home</Text>
            ),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          children={() => (
            <>
              <About />
              <StatusBar backgroundColor="black" barStyle="dark-content" />
            </>
          )}
          name="About"
          options={{
            headerLeft: () => <BackButton />,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerTitle: () => (
              <Text style={{ fontFamily: "M700", fontSize: 20 }}>About Me</Text>
            ),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          children={() => (
            <>
              <Cal />
              <StatusBar backgroundColor="black" barStyle="dark-content" />
            </>
          )}
          name="Cal"
          options={{
            headerLeft: () => <BackButton />,
            headerRight: () => <AboutButton alert={true} />,
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitle: () => (
              <Text style={{ fontFamily: "M700", fontSize: 20 }}>
                Calculator
              </Text>
            ),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          children={() => (
            <>
              <Converter />
              <StatusBar backgroundColor="black" barStyle="dark-content" />
            </>
          )}
          name="Converter"
          options={{
            headerLeft: () => <BackButton />,
            headerRight: () => (
              <AboutButton alert={true} converterAlert={true} />
            ),
            headerBackVisible: false,
            headerBackTitleVisible: false,
            headerTitle: () => (
              <Text style={{ fontFamily: "M700", fontSize: 20 }}>
                Converter
              </Text>
            ),
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
    </NavigationContainer>
  );
}
