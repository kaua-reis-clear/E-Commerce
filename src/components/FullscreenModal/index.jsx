import React, { useRef, useState, useEffect, useCallback } from 'react';
import style from './style';
import { View, Animated } from 'react-native'
import { ScalableImage } from '../index';
import { getWidth } from '../../utils';
import { PinchGestureHandler, PanGestureHandler, State } from 'react-native-gesture-handler';

export default function FullscreenModal({image}) {
  const [panEnabled, setPanEnabled] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const panRef = useRef(null);
  const pinchRef = useRef(null);

  const handlePinch = Animated.event([{nativeEvent: {scale}}], {useNativeDriver: true});

  const handlePan = Animated.event([{nativeEvent: {translationX: translateX, translationY: translateY}}], {useNativeDriver: true});

  function handlePinchStateChanged({nativeEvent}) {
    if(nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }
    
    if(nativeEvent.oldState === State.ACTIVE && nativeEvent.scale < 1) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();

      setPanEnabled(false);
    }
  }

  function handlePanStateChanged() {
    translateX.extractOffset();
    translateY.extractOffset();
  }

  return (
    <View style={style.container}>
        <PanGestureHandler onGestureEvent={handlePan} onHandlerStateChange={handlePanStateChanged} ref={panRef} simultaneousHandlers={[pinchRef]} enabled={panEnabled} shouldCancelWhenOutside>
          <Animated.View>
            <PinchGestureHandler onGestureEvent={handlePinch} onHandlerStateChange={handlePinchStateChanged} ref={pinchRef} simultaneousHandlers={[panRef]}>
              <Animated.View>
                <ScalableImage source={{uri: image}} width={getWidth()} style={[style.image, {transform: [{scale}, {translateX: Animated.divide(translateX, scale)}, {translateY: Animated.divide(translateY, scale)}]}]} />
              </Animated.View>
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
    </View>
  );
}