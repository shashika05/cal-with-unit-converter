import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

import Background from "../components/Background";

const Cal = () => {
  const [text, setText] = useState("");
  const onNumPress = (keyPress) => {
    setText(text + keyPress);
  };
  const onClearButtonPress = () => {
    //
    setText(text.slice(0, -1));
  };
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <View
        style={[
          tailwind(
            "flex flex-col items-center w-72 h-96 mt-16 bg-gray-200 border-2 border-gray-800 rounded-2xl"
          ),
          { backgroundColor: "transparent" },
        ]}
      >
        <TextInput
          style={[
            tailwind("w-72 h-12 border-b-2 border-gray-800 rounded-xl pr-14"),
            { fontSize: 24, fontFamily: "M400" },
          ]}
          value={text}
          onChangeText={(e) => setText(e)}
          placeholder="0"
          textAlign="right"
          keyboardType="numeric"
        />
        <TouchableOpacity
          // Clear Button
          activeOpacity={0.6}
          style={[
            tailwind("justify-center items-center absolute"),
            { right: 16, top: 5 },
          ]}
          onPress={() => onClearButtonPress()}
        >
          <Ionicons name="ios-backspace" size={32} color="black" />
        </TouchableOpacity>
        <View style={tailwind("flex flex-row w-72 h-16 mt-2 ml-6")}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(7)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(8)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(9)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind("flex flex-row w-72 h-16 mt-2 ml-6")}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(4)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(5)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(6)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind("flex flex-row w-72 h-16 mt-2 ml-6")}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(1)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(2)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(3)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind("flex flex-row w-72 h-16 mt-2 ml-6")}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => setText("")}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onNumPress(0)}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* --- BackGroud --- */}
      <Background />
    </View>
  );
};

export default Cal;
