import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export default function Loading({size}) {
  return (
    <View style={{height: size, aspectRatio:5}}>
        <LottieView style={{flex:1}} source={require('../assets/images/Animation - 1719271615517.json')} autoPlay loop/>
    </View>
  )
}