import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const login = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingVertical: 50,
        position: "relative",
      }}
    >
      <View style={styles.allInputs}>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          Login to IMonitor
        </Text>
        <View style={styles.inputCont}>
          <TextInput
            placeholder="Email"
            style={{ paddingHorizontal: 15, paddingVertical: 15 }}
          />
        </View>
        <View style={styles.inputCont}>
          <TextInput
            placeholder="Password"
            style={{ paddingHorizontal: 15, paddingVertical: 15 }}
          />
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>
            Not a Patient?{" "}
            <Text style={{ color: "#0ECAD4" }}>Login as a practitioner</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/(home)/(patient)/vitals")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: 20,
          width: "100%",
          //   backgroundColor: "red",
          left: "10%",
        }}
      >
        Don't have an account?{" "}
        <TouchableOpacity onPress={() => router.navigate("/(auth)/signup")}>
          <Text style={{ color: "#0ECAD4" }}>Signup</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCont: {
    marginVertical: 5,
    borderRadius: 100,
    backgroundColor: "#D1D4D3",
  },
  allInputs: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#0ECAD4",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 100,
  },
});

export default login;
