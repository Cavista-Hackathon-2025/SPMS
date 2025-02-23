import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SocketIOClient from "socket.io-client";

const socket = io("http://192.168.53.198:5000", {
    transports: ["websocket"],
    forceNew: true,
  });
  
  const SensorData: React.FC = () => {
    const [temperature, setTemperature] = useState<string | null>(null);
    const [humidity, setHumidity] = useState<string | null>(null);
  
    useEffect(() => {
      const handleData = (data: any) => {
        console.log("📡 Received from Python:", data);
  
        if (!data || typeof data !== "string") {
          console.error("⚠️ Invalid data received:", data);
          return;
        }
  
        const parts = data.split(",");
        if (parts.length !== 2) {
          console.error("⚠️ Malformed data:", data);
          return;
        }
  
        setTemperature(parts[0].trim());
        setHumidity(parts[1].trim());
      };
  
      socket.on("sensor_data", handleData);
  
      return () => {
        socket.off("sensor_data", handleData);
      };
    }, []);
  
    useEffect(() => {
      socket.on("connect", () => console.log("✅ Connected to server!"));
      socket.on("disconnect", () => console.log("❌ Disconnected from server"));
      socket.on("connect_error", (err) => console.log("⚠️ Connection error:", err));
  
      return () => {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("connect_error");
      };
    }, []);
  
    return (
      <View>
        <Text>🌡️ Temperature: {temperature ? `${temperature}°C` : "No Data"}</Text>
        <Text>💧 Humidity: {humidity ? `${humidity}%` : "No Data"}</Text>
      </View>
    );
  };
  
  export default SensorData;
  