import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const About = () => {
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <Text>About</Text>
      <View
        style={[
          tailwind(
            "absolute w-72 h-72 -bottom-12 -right-12 bg-blue-200 rounded-full"
          ),
          { zIndex: 10 },
        ]}
      />
      <View
        style={[
          tailwind(
            "absolute w-96 h-96 -bottom-12 -left-12 bg-red-200 rounded-full"
          ),
          { zIndex: 0 },
        ]}
      />
    </View>
  );
};

export default About;
