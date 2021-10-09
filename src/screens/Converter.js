import React, { useState } from "react";
import { View, Text, Platform, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

import tailwind from "tailwind-rn";

// Import Converter Array
import converter from "../../ConverterArray";

import Background from "../components/Background";

const Converter = ({ conversion, setConversion }) => {
  const [inputValue, setInputValue] = useState("1");
  const [converterArrayIndex, setConverterArrayIndex] = useState(0);
  const [inputUnit, setInputUnit] = useState("kilometre");
  const converterArray = converter;
  // console.log(converterArray[converterArrayIndex].units);
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <Picker
        style={[
          tailwind("w-full h-12 w-72"),
          {
            marginTop: Platform.OS === "ios" ? 0 : 24,
            marginBottom: Platform.OS === "ios" ? 180 : 10,
          },
        ]}
        selectedValue={conversion}
        onValueChange={(itemValue, itemIndex) => {
          setConversion(itemValue);
          setConverterArrayIndex(itemIndex);
        }}
        itemStyle={{ fontFamily: "M500" }}
      >
        {converterArray.map((item, index) => {
          return (
            <Picker.Item
              style={{ fontFamily: "M400" }}
              label={item.label}
              value={item.value}
              key={index}
            />
          );
        })}
      </Picker>
      <View style={tailwind("flex flex-row justify-center items-center")}>
        <TextInput
          keyboardType="numeric"
          style={[
            tailwind("w-32 h-10 border-b-2 border-gray-800 mt-2 rounded-xl"),
            { fontSize: 16, fontFamily: "M400" },
          ]}
          value={inputValue}
          onChangeText={(e) => setInputValue(e)}
          placeholder="Value"
          textAlign="center"
        />
        <TextInput />
        <Text
          style={{ fontFamily: "M400", fontSize: 60, marginHorizontal: 16 }}
        >
          =
        </Text>
        <View
          style={tailwind(
            "justify-center items-center w-32 h-14 bg-gray-500 rounded-xl"
          )}
        >
          <Text style={{ fontFamily: "M400", fontSize: 20 }}>{inputValue}</Text>
        </View>
      </View>
      <View style={tailwind("flex flex-row justify-center items-center")}>
        <Picker
          style={[
            tailwind("h-12 w-36"),
            {
              marginTop: Platform.OS === "ios" ? 0 : 24,
              marginBottom: Platform.OS === "ios" ? 180 : 10,
            },
          ]}
          selectedValue={inputUnit}
          onValueChange={(itemValue, itemIndex) => setInputUnit(itemValue)}
          itemStyle={{ fontFamily: "M500", fontSize: 12 }}
        >
          {converterArray[converterArrayIndex].units.map((item, index) => {
            return (
              <Picker.Item label={item.unit} value={item.unit} key={index} />
            );
          })}
        </Picker>
        <Picker
          style={[
            tailwind("h-12 w-36"),
            {
              marginTop: Platform.OS === "ios" ? 0 : 24,
              marginBottom: Platform.OS === "ios" ? 180 : 10,
            },
          ]}
          selectedValue={inputUnit}
          onValueChange={(itemValue, itemIndex) => setInputUnit(itemValue)}
          itemStyle={{ fontFamily: "M500", fontSize: 12 }}
        >
          {converterArray[converterArrayIndex].units.map((item, index) => {
            return (
              <Picker.Item label={item.unit} value={item.unit} key={index} />
            );
          })}
        </Picker>
      </View>
      {/* --- BackGroud --- */}
      <Background />
    </View>
  );
};

export default Converter;
