import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AboutButton = () => {
  const nagigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => nagigation.navigate("About")}
    >
      <Feather name="info" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default AboutButton;
