import React from "react";
import { View } from "../Themed";
import {Image} from 'expo-image';
import { useColorScheme } from "react-native";
import { Thread } from "@/types/threads";
import { StyleSheet } from 'react-native';
import { blurhash } from "./ThreadsItem";

export default function PostLeftSide(thread: Thread) {
    const currentTheme = useColorScheme();
    const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";
  
    return (
      <View style={{ justifyContent: "space-between" }}>
        <Image
          source={thread.author.photo}
          style={styles.image}
          placeholder={blurhash}
          contentFit="cover"
          transition={500}
        />
        <View
          style={{
            borderWidth: 1,
            alignSelf: "center",
            borderColor: borderColor,
            flexGrow: 1,
          }}
        />
        <View
          style={{
            width: 20,
            alignItems: "center",
            alignSelf: "center",
            gap: 3,
          }}
        >
          {[1, 2, 3].map((index) => (
            <Image
              key={index}
              // @ts-ignore
              source={thread.replies[index - 1]?.author.photo}
              style={{ width: index * 7, height: index * 7, borderRadius: 15 }}
              placeholder={blurhash}
              contentFit="cover"
              transition={500}
            />
          ))}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 6,
      paddingBottom: 30,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
  });