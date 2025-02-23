// import React, { useEffect, useState, useRef } from "react";
// import { View, Text, Button, StyleSheet, PermissionsAndroid } from "react-native";
// import BluetoothSerial from "react-native-bluetooth-serial-next";

// const deviceID = "53:C7:38:17:A9:CE"; // Replace with your HC-05 MAC address

// type SensorData = {
//   temperature: string | null;
//   humidity: string | null;
// };

// const Bluetooth: React.FC = () => {
//   const [sensorData, setSensorData] = useState<SensorData>({ 
//     temperature: null, 
//     humidity: null 
//   });
//   const [connectionStatus, setConnectionStatus] = useState<string>("Disconnected");
//   const isConnectedRef = useRef(false);

// //   const safeDisconnect = async () => {
// //     try {
// //       if (BluetoothSerial && typeof BluetoothSerial.disconnect === 'function' && isConnectedRef.current) {
// //         await BluetoothSerial.disconnect();
// //         console.log("Disconnected successfully");
// //         isConnectedRef.current = false;
// //       }
// //     } catch (error) {
// //       console.warn("Disconnect error:", error);
// //     }
// //   };

//   useEffect(() => {
//     connectToDevice();

//     // return () => {
//     //   const cleanup = async () => {
//     //     await safeDisconnect(); // Use safeDisconnect here
//     //   };
//     //   cleanup();
//     // };
//   }, []);

//   const requestPermissions = async (): Promise<boolean> => {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
//         PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
//       ]);

//       return (
//         granted["android.permission.ACCESS_FINE_LOCATION"] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted["android.permission.BLUETOOTH_SCAN"] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted["android.permission.BLUETOOTH_CONNECT"] === PermissionsAndroid.RESULTS.GRANTED
//       );
//     } catch (error) {
//       console.error("Permission error:", error);
//       return false;
//     }
//   };

//   const parseSensorData = (data: string): SensorData | null => {
//     try {
//       const cleanedData = data.replace(/\r?\n|\r/g, '');
//       const [tempStr, humStr] = cleanedData.split(",");
      
//       if (!tempStr || !humStr) throw new Error("Invalid data format");
      
//       const temperature = parseFloat(tempStr.trim());
//       const humidity = parseFloat(humStr.trim());

//       if (isNaN(temperature) || isNaN(humidity)) throw new Error("Invalid number format");
//       if (temperature < -40 || temperature > 85) throw new Error("Temperature out of range");
//       if (humidity < 0 || humidity > 100) throw new Error("Humidity out of range");

//       return {
//         temperature: temperature.toFixed(1),
//         humidity: humidity.toFixed(1)
//       };
//     } catch (error) {
//       console.error("Data parsing error:", error);
//       return null;
//     }
//   };

//   const connectToDevice = async () => {
//     try {
//       setConnectionStatus("Connecting...");
      
//       const hasPermissions = await requestPermissions();
//       if (!hasPermissions) {
//         throw new Error("Required permissions not granted");
//       }

//       const enabled = await BluetoothSerial.requestEnable();
//       if (!enabled) {
//         throw new Error("Bluetooth is not enabled");
//       }

//       const pairedDevices = await BluetoothSerial.list();
//       const device = pairedDevices.find((d) => d.id === deviceID);

//       if (!device) {
//         throw new Error("Device not found");
//       }

//       console.log(`Connecting to ${device.name} (${device.id})`);
//       await BluetoothSerial.connect(deviceID);
      
//       isConnectedRef.current = true;
//       setConnectionStatus("Connected");
//       console.log("Bluetooth connection established");

//       BluetoothSerial.readEvery((data) => {
//         const parsedData = parseSensorData(data);
//         if (parsedData) {
//           setSensorData(parsedData);
//         }
//       }, 500);

//     } catch (error) {
//       isConnectedRef.current = false;
//       setConnectionStatus(`Error: ${(error as Error).message}`);
//       console.error("Connection Error:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.status}>Status: {connectionStatus}</Text>
//       <Text>Temperature: {sensorData.temperature ? `${sensorData.temperature}°C` : "N/A"}</Text>
//       <Text>Humidity: {sensorData.humidity ? `${sensorData.humidity}%` : "N/A"}</Text>
//       <Button 
//         title="Reconnect" 
//         onPress={connectToDevice} 
//         disabled={connectionStatus === "Connecting..."}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     margin: 16,
//     elevation: 4,
//   },
//   status: {
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
// });

// export default Bluetooth;