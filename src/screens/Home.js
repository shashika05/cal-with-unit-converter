import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tailwind from "tailwind-rn";

import Background from "../components/Background";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      {/* --- Cal navigate button --- */}
      <TouchableOpacity
        style={tailwind(
          "w-72 h-20 mt-32 bg-gray-800 rounded-xl items-center justify-center"
        )}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Cal")}
      >
        <Text style={{ fontFamily: "M500", fontSize: 24, color: "white" }}>
          Calculator
        </Text>
      </TouchableOpacity>
      {/* --- Cal navigate button --- */}
      <TouchableOpacity
        style={tailwind(
          "w-72 h-20 mt-16 bg-gray-800 rounded-xl items-center justify-center"
        )}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Converter")}
      >
        <Text style={{ fontFamily: "M500", fontSize: 24, color: "white" }}>
          Converter
        </Text>
      </TouchableOpacity>
      {/* --- Absolute View for BG --- */}
      <Background />
    </View>
  );
};

export default Home;
