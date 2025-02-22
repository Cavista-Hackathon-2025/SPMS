import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const vitals = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePic}></View>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>Oke Habeeb</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyRow}>
          <View style={styles.col}></View>
          <View style={styles.col}></View>
        </View>
        <View style={styles.bodyRow}>
          <View style={styles.col}></View>
          <View style={styles.col}></View>
        </View>
        <View style={styles.bodyRow}>
          <View style={styles.col}></View>
          <View style={styles.col}></View>
        </View>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    marginRight: 10,
    width: 50,
    height: 50,
    backgroundColor: "#D1D4D3",
    borderRadius: "50%",
  },
  body: {},
  bodyRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    padding: 10,
  },
  col: {
    width: 150,
    height: 150,
    padding: 10,
    backgroundColor: "#D1D4D3",
    borderRadius: 10,
  },
});

export default vitals;
