import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const TableData = () => {
  return (
    <View style={styles.TableData}>
      <Text style={styles.tableData}></Text>
      <Text style={styles.tableData}>Data</Text>
      <Text style={styles.tableData}>
        {" "}
        <Button title="View" onPress={() => router.navigate('/(auth)')} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TableData: {},
  tableData: {},
});
export default TableData;
