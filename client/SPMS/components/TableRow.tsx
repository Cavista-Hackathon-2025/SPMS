import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const TableRow = () => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableData}>Data</Text>
      <Text style={styles.tableData}>Data</Text>
      <Text style={styles.tableData}>
        {" "}
        <Button title="View" onPress={() => router.navigate('/(auth)')} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableRow: {},
  tableData: {},
});
export default TableRow;
