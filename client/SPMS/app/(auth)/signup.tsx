import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const signup = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        // position: "relative",
      }}
    >
      <ScrollView>
        <View style={styles.allInputs}>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
          >
            Create an account{" "}
          </Text>
          <KeyboardAvoidingView>
            <View style={styles.inputCont}>
              <TextInput
                placeholder="First Name"
                style={{ paddingHorizontal: 15, paddingVertical: 15 }}
              />
            </View>
            <View style={styles.inputCont}>
              <TextInput
                placeholder="Last Name"
                style={{ paddingHorizontal: 15, paddingVertical: 15 }}
              />
            </View>
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
            <View style={styles.inputCont}>
              <TextInput
                placeholder="Mobile"
                style={{ paddingHorizontal: 15, paddingVertical: 15 }}
              />
            </View>
            <View style={styles.inputCont}>
              <TextInput
                placeholder="Password"
                style={{ paddingHorizontal: 15, paddingVertical: 15 }}
              />
            </View>
            <View style={styles.inputCont}>
              <TextInput
                placeholder="Country"
                style={{ paddingHorizontal: 15, paddingVertical: 15 }}
              />
            </View>
            <View style={styles.inputCont}>
              <TextInput
                placeholder="Register as: eg. Patient, Practitioner"
                style={{ paddingHorizontal: 15, paddingVertical: 15 }}
              />
            </View>
          </KeyboardAvoidingView>
          <Text
            style={{
              textAlign: "center",
              // flexDirection: "row",
              alignItems: "center", paddingTop: 10
            }}
          >
            Already have an account?{" "}
            <TouchableOpacity onPress={() => router.navigate("/(auth)/login")}>
              <Text style={{ color: "#0ECAD4" }}>Login</Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity
            onPress={() => router.navigate("/(home)/(patient)/vitals")}
            style={styles.button}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCont: {
    marginVertical: 8,
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

export default signup;
