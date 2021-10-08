import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import tailwind from "tailwind-rn";

// Import Converter Array
import converter from "../../ConverterArray";

import Background from "../components/Background";

const Converter = ({ conversion, setConversion }) => {
  const converterArray = converter;
  console.log(conversion);
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <Picker
        style={tailwind("w-full h-12")}
        selectedValue={conversion}
        onValueChange={(itemValue, itemIndex) => setConversion(itemValue)}
        itemStyle={{ fontFamily: "M600" }}
      >
        {converterArray.map((item, index) => {
          return (
            <Picker.Item label={item.label} value={item.value} key={index} />
          );
        })}
      </Picker>
      {/* --- BackGroud --- */}
      <Background />
    </View>
  );
};

export default Converter;
