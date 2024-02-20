import React from 'react';
import { View } from '../Themed';
import { AntDesign, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function Buttons() {

    const iconSize = 20;
    const currentTheme = useColorScheme();
    const iconColor = currentTheme === 'dark' ? 'white' : 'black'

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <FontAwesome name='heart-o' size={iconSize} color={iconColor} />
        <Ionicons name='chatbubble-outline' size={iconSize} color={iconColor} />
        <AntDesign name='retweet' size={iconSize} color={iconColor} />
        <Feather name='send' size={iconSize} color={iconColor} />
    </View>
  )
}
