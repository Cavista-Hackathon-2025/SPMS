import UsbSerial from "@/components/ui/UsbSerial";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
const vitals = () => {
  const { id } = useLocalSearchParams();

  const [temperature, setTemperature] = useState("");
  const [heartBeat, setHeartBeat] = useState("");

  async function recieveData(userId = "ad3bf32b-9f75-4f7c-bcb9-bcaef5c1733f") {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/fetchVital",
        {
          userId,
        }
      );
      // const {temperature, heartbeat}: {} = response;
      setTemperature(response.data.temperature);
      setHeartBeat(response.data.heartBeat); // ✅ Corrected
    } catch (err) {
      console.log(err);
    }
  }

  async function readVitals(userId: string, chat: string) {
    try {
      axios.post("http://localhost:3000/api/v1/start", {
        userId,
        chat,
      });
      router.push("/(home)/(patient)/ai_response");
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      recieveData();
    }, 3000);
    return () => clearInterval(interval); // ✅ Cleanup
  }, []);
  

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
              {heartBeat} <Text>BPM</Text>
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
              {temperature} <Text>°C</Text>
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
        <TouchableOpacity
          onPress={() =>
            readVitals(
              "ad3bf32b-9f75-4f7c-bcb9-bcaef5c1733f",
              `My body temperature is ${temperature}°C, and my heart rate is ${heartBeat} BPM. Based on medical standards, is this normal or concerning? Please provide a detailed evaluation with possible causes and recommendations.`
            )
          }
          style={styles.button}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Review Vitals
          </Text>
        </TouchableOpacity>
      </View>
      {/* <UsbSerial /> */}
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
    borderBottomWidth: 0.3,
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
