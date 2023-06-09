import React, { useState, useEffect, memo } from 'react';
import { Image, Animated } from 'react-native';
import style from './style';

function ScalableImage({source, width, handleError, height, ...props}) {
  const [dim, setDim] = useState(null);

  let isMounted = true;
  
  function calcDim(newWidth, newHeight) {
    if (width && height) {
      return setDim({ width, height });
    }
    if (!width && !height) {
      return setDim({ width: newWidth, height: newHeight });
    }
    if (!height) {
      const height = newHeight ? Math.floor(width * (newHeight / newWidth)) : width;
      return setDim({ width, height });
    }
    if (!width){
      return setDim({ width: height * (newWidth / newHeight), height });
    }
  }

  useEffect(() => {
    if (source.uri) {
      Image.getSize(source.uri, (newWidth, newHeight) => {
        if (!isMounted) {
          return
        }

        calcDim(newWidth, newHeight);
      }, (error) => {
        if (handleError) {
          handleError(error)
        }
      })
    }
  }, [])

  if (dim) {
    return (
      <Animated.Image source={source} style={[style.image(dim.width, dim.height), props.style]} onError={(e) => {
        if(handleError) {
          handleError(e.nativeEvent.error)
        }
      }}/>
    );
  }
  return null;
}

export default memo(ScalableImage);