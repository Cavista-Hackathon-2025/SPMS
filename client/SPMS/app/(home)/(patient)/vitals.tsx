import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const vitals = () => {
  const { id } = useLocalSearchParams();
  //   console.log(id);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <View style={styles.profilePic}></View> */}
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>My Vitals</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyRow}>
          <View style={styles.col}>
            <Image
              style={{ width: "100%" }}
              source={require("../../../assets/images/heart.png")}
            />
            <Text
              style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}
            >
              100 <Text>Bps</Text>
            </Text>
          </View>
          <View style={styles.col}>
            <Image
              style={{ width: 90, height: 100, marginHorizontal: "auto" }}
              source={require("../../../assets/images/temperature.png")}
            />
            <Text
              style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}
            >
              200 <Text>C</Text>
            </Text>
          </View>
        </View>

        <View style={styles.bodyRow}>
          {/* <View style={styles.col}>
            <Image style={{width: "100%"}} source={require("../../../assets/images/heart.png")} />
            <Text style={{fontWeight: "bold", textAlign: "center", fontSize: 20}}>100 <Text>Bps</Text></Text>
          </View> */}
          <View style={styles.col}>
            <Image
              style={{ width: 80, height: 100, marginHorizontal: "auto" }}
              source={require("../../../assets/images/humidity.png")}
            />
            <Text
              style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}
            >
              100 <Text>mmHg</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Review Vitals
          </Text>
        </TouchableOpacity>
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
    // backgroundColor: "#D1D4D3",
    borderBottomWidth: 0.3
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
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
    padding: 10,
  },
  col: {
    width: 150,
    height: 150,
    padding: 10,
    backgroundColor: "#D1D4D3",
    borderRadius: 10,
    justifyContent: "space-between",
    // elevation: 5,
  },
  button: {
    backgroundColor: "#0ECAD4",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
});

export default vitals;
