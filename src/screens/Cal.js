// This is Cal.js v1.0.0 First major release.

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

import Background from "../components/Background";

const Cal = () => {
  // Needs to implement DotPress Events and Handles
  const [text, setText] = useState("");
  const [placeHolder, setPlaceHolder] = useState("0");
  const [dataArray, setDataArray] = useState([]);
  const [operatorArray, setOperatorArray] = useState([]);
  const [calculatedArray, setCalculatedArray] = useState([]);
  const onNumPress = (keyPress) => {
    setText(text + keyPress);
  };
  const onBackSpacePress = () => {
    //
    setText(text.slice(0, -1));
    if (text === "" && placeHolder) {
      setText(placeHolder.slice(0, -1));
      operatorArray.pop();
      dataArray.pop();
    }
  };

  const decimalHandle = (num) => {
    if (num % 1 === 0) {
      return num;
    } else {
      return dataArray[dataArray.length - 1].toFixed(4);
    }
  };

  const calculaingHandle = () => {
    // ÷
    if (dataArray.length === 2 && operatorArray[0] === "/") {
      dataArray.push(
        Number(
          dataArray[dataArray.length - 2] / dataArray[dataArray.length - 1]
        )
      );
    }
    // *
    if (dataArray.length === 2 && operatorArray[0] === "*") {
      dataArray.push(
        Number(
          dataArray[dataArray.length - 1] * dataArray[dataArray.length - 2]
        )
      );
    }
    // +
    if (dataArray.length === 2 && operatorArray[0] === "+") {
      dataArray.push(
        Number(
          dataArray[dataArray.length - 1] + dataArray[dataArray.length - 2]
        )
      );
    }
    // -
    if (dataArray.length === 2 && operatorArray[0] === "-") {
      dataArray.push(
        Number(
          dataArray[dataArray.length - 2] - dataArray[dataArray.length - 1]
        )
      );
    }
    setText(String(decimalHandle(dataArray[dataArray.length - 1])));
    setDataArray([]);
    text === "" ? null : dataArray.push(Number(text));
    operatorArray.pop();
    console.log("-----Cal handle function-------");
    console.log("dataArray: ", dataArray);
    console.log("operatorArray: ", operatorArray);
    console.log("calculatedArray: ", calculatedArray);
    console.log("-----------------------------------");
  };

  // C
  const onClearButtonPress = () => {
    setText("");
    setPlaceHolder("0");
    setDataArray([]);
    setOperatorArray([]);
    setCalculatedArray([]);
  };

  // =
  const onEqualPress = () => {
    console.log(operatorArray);
    operatorArray.length >= 1 ? dataArray.push(Number(text)) : null;
    text === "" || text === "0" ? null : calculaingHandle();
  };

  // ÷
  const onDividePress = () => {
    console.log("÷ pressed");
    if (operatorArray[0]) {
      operatorArray.pop();
      operatorArray.push("/");
      setPlaceHolder(placeHolder.slice(0, -1) + "÷");
    } else {
      operatorArray.push("/");
      dataArray.push(Number(text));
      setPlaceHolder(text + "÷");
      setText("");
    }
  };

  // *
  const onMultipyPress = () => {
    console.log("* pressed");
    if (operatorArray[0]) {
      operatorArray.pop();
      operatorArray.push("*");
      setPlaceHolder(placeHolder.slice(0, -1) + "×");
    } else {
      operatorArray.push("*");
      dataArray.push(Number(text));
      setPlaceHolder(text + "×");
      setText("");
    }
  };

  // +
  const onPlusPress = () => {
    text === "-"
      ? setText("")
      : dataArray.push(Number(text)) &&
        operatorArray.push("+") &&
        setPlaceHolder(text + "+");
    setText("");
  };

  // -
  const onMinusPress = () => {
    if (text === "") {
      setText("-");
    } else {
      dataArray.push(Number(text));
      operatorArray.push("-");
      setPlaceHolder(text + "-");
      setText("");
    }
  };

  // .
  const onDotPress = () => {
    text === "" ? setText(0 + ".") : setText(text + ".");
  };

  return (
    <View style={tailwind("flex items-center w-full h-full")}>
      <View
        style={[
          tailwind(
            "flex flex-col items-center w-72 h-96 mt-24 bg-gray-200 border-2 border-gray-800 rounded-2xl"
          ),
          { backgroundColor: "transparent" },
        ]}
      >
        <TextInput
          style={[
            tailwind("w-72 h-12 border-b-2 border-gray-800 mt-2 rounded-xl"),
            { fontSize: 28, fontFamily: "M400", paddingRight: 52 },
          ]}
          value={text}
          onChangeText={(e) => setText(e)}
          placeholder={placeHolder}
          textAlign="right"
          keyboardType="numeric"
        />
        <TouchableOpacity
          // Clear Button
          activeOpacity={0.6}
          style={[
            tailwind("justify-center items-center absolute"),
            { right: 16, top: 14 },
          ]}
          onPress={() => onBackSpacePress()}
          onLongPress={() => onClearButtonPress()}
        >
          <Ionicons name="ios-backspace" size={32} color="black" />
        </TouchableOpacity>
        <View style={tailwind("flex flex-row w-72 h-16 mt-5 ml-6")}>
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
            // Plus sign
            onPress={() => onPlusPress()}
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
            // Minus sign
            onPress={() => onMinusPress()}
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
            // Multipy sign
            onPress={() => onMultipyPress()}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind("flex flex-row w-72 h-16 mt-2 ml-6")}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            onPress={() => onClearButtonPress()}
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
            onPress={() => onDotPress()}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tailwind(
              "justify-center items-center w-14 h-16 bg-blue-400 rounded-xl ml-2"
            )}
            // Divide sign
            onPress={() => onDividePress()}
          >
            <Text style={{ fontFamily: "M600", fontSize: 24 }}>÷</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          // Equal Sign
          // activeOpacity={0.97}
          style={[
            tailwind(
              "absolute justify-center items-center w-16 h-16 bg-gray-800 rounded-full ml-2"
            ),
            { right: -180, bottom: -30 },
          ]}
          onPress={() => onEqualPress()}
        >
          <Text style={{ fontFamily: "M600", fontSize: 24, color: "white" }}>
            =
          </Text>
        </TouchableOpacity>
      </View>
      {/* --- BackGroud --- */}
      <Background />
    </View>
  );
};

export default Cal;
