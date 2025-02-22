import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AIResponse = () => {
  return (
    <View>
      <Text style={styles.date}>February 12, 2024</Text>
      <View style={styles.chatContainer}>
        <Text style={styles.chat}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsa
          culpa veniam ex, voluptates amet ipsam iste repellat at rem modi illo
          tempore hic excepturi libero beatae voluptatibus ullam dolores quos
          blanditiis qui eaque voluptate! Vero, perspiciatis sequi! Voluptatibus
          eveniet explicabo harum qui quia deleniti? Minus vero aspernatur enim
          autem facere nostrum aut voluptas ut tempora est laudantium iste,
          deserunt modi delectus eius aperiam nihil voluptate accusantium eaque
          doloremque in! Laudantium voluptatum nisi est praesentium, nesciunt
          culpa perferendis reiciendis. Unde iusto vero, molestias quidem hic
          neque nihil aut veniam perferendis quae iste odit animi perspiciatis
          voluptatum architecto inventore quas ea
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // marginHorizontal: 10,
  },
  date: {
    textAlign: "center",
    opacity: 0.5,
  },
  chatContainer: {},
  chat: {
    backgroundColor: "#D1D4D3",
    // borderWidth: 0.3,
    padding: 10,
    marginHorizontal: "auto",
    width: "90%",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default AIResponse;
