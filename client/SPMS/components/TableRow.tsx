import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const TableRow = ({name, id}: {name: string, id: number | string}) => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableData}>{name}</Text>
      <Text style={styles.tableData}>{id}</Text>
      <Text style={styles.tableData}>
        {" "}
        <Button title="View" onPress={() => router.navigate({pathname: '/(home)/(patient)/vitals', params: {id: id}})} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // tableRow: {},
  // tableData: {},
  tableRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#D1D4D3',
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
    // borderLeftWidth: 1,

},
tableData:{
    paddingVertical: 10,
    // borderRightWidth: 1,
    paddingHorizontal: 10,
    width: '33.3%',
    textAlign: 'center',
}
});
export default TableRow;
