import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

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
            "absolute w-96 h-96 -bottom-40 -left-12 bg-purple-300 rounded-full"
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
      <View
        style={tailwind(
          "flex flex-row justify-center items-center absolute bottom-3"
        )}
      >
        <Text style={{ fontFamily: "M500", fontSize: 14 }}>Made with </Text>
        <Ionicons name="heart" size={14} color="red" />
        <Text style={{ fontFamily: "M500", fontSize: 14, color: "black" }}>
          {" "}
          in 🇱🇰
        </Text>
      </View>
    </View>
  );
};

export default Background;
