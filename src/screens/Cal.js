import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";

import Background from "../components/Background";

const Cal = () => {
  const [text, setText] = useState("");
  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <View
        style={tailwind(
          "flex flex-col items-center w-72 h-96 mt-16 bg-gray-200 border-2 border-gray-800 rounded-2xl"
        )}
      >
        <TextInput
          style={[
            tailwind("w-72 h-12 border-b-2 border-gray-800 rounded-xl pr-4"),
            { fontSize: 24, fontFamily: "M400" },
          ]}
          value={text}
          onChangeText={(e) => setText(e)}
          placeholder="0"
          textAlign="right"
          keyboardType="numeric"
        />
        <View style={tailwind("flex flex-row w-72 h-16 mt-2 ml-6")}>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>x</Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind("flex flex-row w-72 h-16 mt-2 ml-6")}>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind("flex flex-row w-72 h-16 mt-2 ml-6")}>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View
          style={tailwind(
            "justify-center items-center flex flex-row w-72 h-16 mt-2 ml-6"
          )}
        >
          <TouchableOpacity
            style={[
              tailwind(
                "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl"
              ),
              { marginRight: 90 },
            ]}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={tailwind(
            "absolute justify-center items-center w-14 h-16 bg-blue-400 rounded-xl bottom-4 right-4"
          )}
        >
          <Text>=</Text>
        </TouchableOpacity>
      </View>
      {/* --- BackGroud --- */}
      <Background />
    </View>
  );
};

export default Cal;
