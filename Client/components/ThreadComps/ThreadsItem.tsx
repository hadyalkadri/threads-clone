import React from 'react';
import {View} from 'react-native';
import { Text } from '../Themed';
import { Thread } from '@/types/threads';
import PostHeading from './PostHeading';
import PostFooter from './PostFooter';
import PostLeftSide from './PostLefSide';
import Buttons from './Buttons';
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';


export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ThreadsItem = (thread: Thread): JSX.Element =>{


    return(
        <View style={styles.container}>
            <PostLeftSide {...thread} />
            {/* <Text>{thread.author.username}</Text> */}
            <View style={{flexShrink: 1, gap: 6}}>
                <PostHeading name={thread.author.name} createdAt={thread.createdAt} verified={thread.author.verified} />
                <Text>{thread.content}</Text>
                {thread.image && (
                    <Image 
                        source={thread.image}
                        style={{
                            width: '100%',
                            minHeight: 300,
                            borderRadius: 10
                        }}
                        placeholder={blurhash}
                        contentFit='cover'
                        transition={500}
                    />
                )}
                <Buttons />
                <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
            </View>
        </View>
    )
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

export default ThreadsItem;