import React from "react";
import { View } from "react-native";
import tailwind from "tailwind-rn";

const Background = () => {
  return (
    <View
      style={[
        tailwind("flex absolute items-center w-full h-full"),
        { zIndex: -10 },
      ]}
    >
      <View
        style={[
          tailwind(
            "absolute w-96 h-96 -top-56 right-16 bg-gray-300 rounded-full"
          ),
          // { zIndex: -10 },
        ]}
      />
      <View
        style={[
          tailwind(
            "absolute w-96 h-96 -bottom-40 -left-12 bg-purple-200 rounded-full"
          ),
          // { zIndex: -20 },
        ]}
      />
      <View
        style={[
          tailwind(
            "absolute w-72 h-72 -bottom-40 -right-12 bg-green-200 rounded-full"
          ),
          // { zIndex: -10 },
        ]}
      />
    </View>
  );
};

export default Background;
