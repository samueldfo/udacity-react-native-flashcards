import { Constants } from 'expo';
import React from 'react';
import { StatusBar, View } from 'react-native';

export default function StyledStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}