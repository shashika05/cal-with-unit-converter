import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

import Background from "../components/Background";

const About = () => {
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <Text>About</Text>
      {/* --- BackGroud --- */}
      <Background />
    </View>
  );
};

export default About;
