import React from 'react'
import { View } from 'react-native'
import { Text } from '../Themed'

export default function PostFooter({replies, likes}: {replies: number, likes: number}) {
  return (
    <View>
        <Text>
            {replies} replies . {likes} likes
        </Text>
    </View>
  )
}
