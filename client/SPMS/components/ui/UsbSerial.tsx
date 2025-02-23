import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import UsbSerialPort from "react-native-usb-serialport";

const UsbSerial: React.FC = () => {
  const [temperature, setTemperature] = useState<string | null>(null);
  const [humidity, setHumidity] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    connectToUsb();
  }, []);

  const connectToUsb = async () => {
    try {
      const devices = await UsbSerialPort.list();
      if (devices.length === 0) {
        console.error("No USB devices found");
        return;
      }

      const device = devices[0]; // Pick first detected device
      await UsbSerialPort.open(device.deviceId, 9600); // Open USB Serial connection
      setIsConnected(true);
      console.log("Connected to USB Serial");

      UsbSerialPort.onData((data: string) => {
        console.log("Received:", data);
        const [temp, hum] = data.trim().split(",");
        setTemperature(temp);
        setHumidity(hum);
      });
    } catch (error) {
      console.error("USB Connection Error:", error);
    }
  };

  return (
    <View>
      <Text>Temperature: {temperature ? `${temperature}°C` : "No Data"}</Text>
      <Text>Humidity: {humidity ? `${humidity}%` : "No Data"}</Text>
      <Text>Status: {isConnected ? "Connected" : "Disconnected"}</Text>
      <Button title="Reconnect" onPress={connectToUsb} />
    </View>
  );
};

export default UsbSerial;
