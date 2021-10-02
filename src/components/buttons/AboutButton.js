import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AboutButton = ({ calAlert }) => {
  const navigation = useNavigation();

  const alertHandle = () => {
    Alert.alert("Calculator", "version 1.0.0", [
      {
        text: "OK",
        style: "cancel",
      },
      { text: "More", onPress: () => navigation.navigate("About") },
    ]);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        calAlert === true ? alertHandle() : navigation.navigate("About")
      }
    >
      <Feather name="info" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default AboutButton;
