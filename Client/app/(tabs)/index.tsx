import { StyleSheet, SafeAreaView, ScrollView, Platform, RefreshControl } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Lottie from 'lottie-react-native';
import { useContext, useRef } from 'react';

import {ThreadsContext} from '../../context/threadContext';
import ThreadsItem from '@/components/ThreadComps/ThreadsItem';




export default function TabOneScreen() {

  const animationRef = useRef<Lottie>(null);
  const threads = useContext(ThreadsContext)

  // console.log('This is the state',threads);

  return (
    
    <SafeAreaView>
  
        <ScrollView
          contentContainerStyle={{
          
          }}
          refreshControl={
            <RefreshControl 
              refreshing={false}
              tintColor={'white'}
              onRefresh={() => {
                animationRef.current?.play();
              }} 
            />
          }
        >
            <Lottie
              ref={animationRef} 
              source={require('../../assets/animations/threads.json')}
              autoPlay
              loop={false}
              style={{
                width: 90,
                height: 90,
                alignSelf: 'center'
              }}
            />
        {threads.map((thread, index) => (
            <ThreadsItem key={index} {...thread} />
        ))}
        </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
