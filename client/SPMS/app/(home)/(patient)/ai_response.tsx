import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import AIResponse from "@/components/AIResponse";

export default function ai_response() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 25, borderBottomWidth: 0.3, paddingVertical: 10 }}>AI Response</Text>
      <ScrollView>
        <View style={styles.chats}>
          <AIResponse />
          <AIResponse />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  chats: {
    gap: 20,
  },
});
