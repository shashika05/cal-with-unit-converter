import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tailwind from "tailwind-rn";

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

export default Home;
