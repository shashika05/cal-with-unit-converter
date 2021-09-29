import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

import BackGround from "../components/BackGround";

const About = () => {
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <Text>About</Text>
      {/* --- BackGroud --- */}
      <BackGround />
    </View>
  );
};

export default About;
