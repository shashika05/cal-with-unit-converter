import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tailwind from "tailwind-rn";

import BackGround from "../components/BackGround";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <TouchableOpacity
        style={tailwind(
          "w-72 h-20 bg-gray-800 rounded-xl items-center justify-center mt-12"
        )}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Cal")}
      >
        <Text style={{ fontFamily: "M500", fontSize: 24, color: "white" }}>
          Calculator
        </Text>
      </TouchableOpacity>
      {/* --- Absolute View for BG --- */}
      <BackGround />
    </View>
  );
};

export default Home;
