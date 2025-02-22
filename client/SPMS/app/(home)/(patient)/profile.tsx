import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePic}></View>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Oke Habeeb Adedayo
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.profileContent}>
          <Text>Status</Text>
          <Text>Active</Text>
        </View>
        <View style={styles.profileContent}>
          <Text>Role</Text>
          <Text>Patient</Text>
        </View>
        <View style={styles.profileContent}>
          <Text>Mobile</Text>
          <Text>08123186689</Text>
        </View>
        <View style={styles.profileContent}>
          <Text>Height</Text>
          <Text>1.65m</Text>
        </View>
        <View style={styles.profileContent}>
          <Text>Age</Text>
          <Text>27</Text>
        </View>
        <View style={styles.profileContent}>
          <Text>Country</Text>
          <Text>Nigeria</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.navigate("/(auth)/login")}
        style={styles.button}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
  },
  profilePic: {
    marginRight: 10,
    width: 150,
    height: 150,
    backgroundColor: "#D1D4D3",
    borderRadius: "50%",
  },
  body: {
    width: "90%",
    marginHorizontal: "auto",
    gap: 30,
    backgroundColor: "#D1D4D3",
    marginTop: 70,
    padding: 15,
    borderRadius: 15,
  },
  profileContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#0ECAD4",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 100,
    width: "90%",
    marginHorizontal: "auto",
  },
});

export default profile;
