import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

import Background from "../components/Background";

const Cal = () => {
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      {/* --- BackGroud --- */}
      <Background />
    </View>
  );
};

export default Cal;
