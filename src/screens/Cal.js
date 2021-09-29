import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

import BackGround from "../components/BackGround";

const Cal = () => {
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      {/* --- BackGroud --- */}
      <BackGround />
    </View>
  );
};

export default Cal;
