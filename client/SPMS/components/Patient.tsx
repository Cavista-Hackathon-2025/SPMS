import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const Patient = ({name, id, date}: {name: string, id: number | string, date: string}) => {
  return (
    <TouchableOpacity onPress={() => router.navigate({pathname: '/(home)/(patient)/vitals', params: {id: id}})} style={styles.patient}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <View style={styles.profilePic}></View>
        <View>
          <View>
            <Text style={{ fontWeight: "bold" }}>{name}</Text>
            <Text>{date}</Text>
          </View>
        </View>
      </View>
      <Text>
        Active
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  patient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderBottomWidth: 0.2,
    backgroundColor: "#D1D4D3",
    // paddingVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
  profilePic: {
    marginRight: 10,
    width: 30,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "50%",
  },
});

export default Patient;
