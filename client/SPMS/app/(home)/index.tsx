import Patient from "@/components/Patient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>SPMS</Text>
        <Text style={styles.profile}>Dr. Olumide</Text>
      </View>
      <View style={styles.body}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Patients</Text>
        <View style={{ gap: 10, paddingHorizontal: 20 }}>
          <Patient name="Oke Habeeb Adedayo" date="12/10/12" id="1001" />
          <Patient name="Oke Habeeb Adedayo" date="12/10/12" id="1001" />
          <Patient name="Oke Habeeb Adedayo" date="12/10/12" id="1001" />
          <Patient name="Oke Habeeb Adedayo" date="12/10/12" id="1001" />
        </View>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: "row",
//     padding: 10,
//     height: 50,
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#0ECAD4",
//     paddingVertical: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   body: {
//     padding: 10,
//     // backgroundColor: "#D1D4D3",
//     flex: 1,
//     gap: 10,
//     // borderBottomWidth: 1,
//     // borderRightWidth: 1,
//     // borderLeftWidth: 1,
//   },
//   logo: {
//     color: "white",
//     fontSize: 16,
//   },
//   profile: {
//     color: "white",
//     fontSize: 16,
//   },

// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0ECAD4",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    padding: 10,
    // backgroundColor: "#D1D4D3",
    flex: 1,
    // borderBottomWidth: 1,
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
  },
  logo: {
    color: "white",
    fontSize: 16,
  },
  profile: {
    color: "white",
    fontSize: 16,
  },
  thead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: '#D1D4D3',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  tableBody: {
    // backgroundColor: '#D1D4D3',
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
  },
  th: {
    paddingVertical: 10,
    borderRightWidth: 1,
    paddingHorizontal: 10,
    width: "33.3%",
    textAlign: "center",
  },
});

export default index;
