import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const Cal = () => {
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      {/* --- Absolute View for BG --- */}
      <View
        style={tailwind(
          "absolute w-72 h-72 -bottom-12 -right-12 bg-blue-200 rounded-full"
        )}
      />
      <View
        style={tailwind(
          "absolute w-80 h-96 -bottom-12 -left-12 bg-red-200 rounded-full"
        )}
      />
    </View>
  );
};

export default Cal;
