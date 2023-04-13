import React, { useEffect, useRef, useState, useContext, memo } from 'react';
import { Animated, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { getHeight, getWidth } from '../../utils';
import style from './style';
import { ECommerceContext } from '../../contexts/ECommerceContext';

function BottomSheet({children}) {
  const { showModal, setShowModal } = useContext(ECommerceContext);
  const bottomSheetHeight = getHeight(0.75, '*');
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;
  const [open, setOpen] = useState(showModal)
  
  function onGesture(event) {
    if(event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  }

  function onGestureEnd(event) {
    if(event.nativeEvent.translationY > (bottomSheetHeight / 2)) {
      setShowModal(false);
    } else {
      bottom.setValue(0);
    }
  }
  
  useEffect(() => {
    if(showModal) {
      setOpen(showModal);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 150,
        useNativeDriver: false
      }).start(() => {
        setOpen(false);
      });
    }
  })
  if (!open) {
    return null;
  }
  return (
    <Animated.View style={[style.container, {height: bottomSheetHeight, bottom}]}>
      <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
        <View style={style.header}>
          <View style={style.line} />
        </View>
      </PanGestureHandler>
      {children}
    </Animated.View>
  );
}

export default memo(BottomSheet);