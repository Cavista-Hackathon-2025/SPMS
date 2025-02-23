import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { io } from "socket.io-client";

const SERVER_URL = "http://192.168.53.198:5000"; // ✅ Ensure correct server URL

const socket = io(SERVER_URL, {
  transports: ["websocket"],
  reconnection: true,
  forceNew: false, // ✅ Keep connection persistent
});

const SensorData: React.FC = () => {
  const [temperature, setTemperature] = useState<string | null>(null);
  const [humidity, setHumidity] = useState<string | null>(null);

  useEffect(() => {
    console.log("🔌 Connecting to socket...");

    // ✅ Handle incoming sensor data
    const handleData = (data: string) => {
      console.log("📡 Received:", data);

      if (!data || typeof data !== "string") {
        console.error("⚠️ Invalid data format:", data);
        return;
      }

      const parts = data.split(",");
      if (parts.length === 2) {
        setTemperature(parts[0].trim());
        setHumidity(parts[1].trim());
      } else {
        console.error("⚠️ Malformed data:", data);
      }
    };

    socket.on("sensor_data", handleData);

    return () => {
      console.log("🧹 Cleaning up socket...");
      socket.off("sensor_data", handleData);
    };
  }, [socket]); // ✅ Keep effect dependencies empty to avoid unnecessary re-renders

  return (
    <View>
      <Text>🌡️ Temperature: {temperature ? `${temperature}°C` : "Waiting..."}</Text>
      <Text>💧 Humidity: {humidity ? `${humidity}%` : "Waiting..."}</Text>
    </View>
  );
};

export default SensorData;
