import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import Home from "./src/screens/Home";
import Cal from "./src/screens/Cal";
import About from "./src/screens/About";

// Nav-Buttons
import BackButton from "./src/components/buttons/BackButton";
import AboutButton from "./src/components/buttons/AboutButton";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          children={() => <Home />}
          name="Home"
          options={{
            headerLeft: () => <AboutButton />,
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
