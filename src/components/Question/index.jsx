import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';

export default function Question({question}) {
  const [answersHeight, setAnswersHeight] = useState(null);
  const [lastAnswersHeight, setLastAnswersHeight] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    if(answersHeight && lastAnswersHeight) {
      setLineHeight(answersHeight - lastAnswersHeight + 7);
    }
  }, [answersHeight, lastAnswersHeight]);

  function getAnswersHeight(event) {
    if (question.answers.length > 0) {
      const { height} = event.nativeEvent.layout;
      setAnswersHeight(height);
    }
  }
  
  function getLastAnswerHeight(event) {
    if (question.answers.length > 0) {
      const { height } = event.nativeEvent.layout;
      setLastAnswersHeight(height);
    }
  }

  function getAllAnswers() {
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <View style={style.line(lineHeight)}/>
          <View onLayout={getAnswersHeight}>
            {viewMore && (question.answers.map((answer, index) => (
              <View style={style.answerArea} key={answer.id} onLayout={index ==(question.answers.length -1 ) ? getLastAnswerHeight : null}>
                <View style={style.answerLineArea}>
                  {lineHeight > 0 && (
                    <View style={style.answerLine}></View>
                  )}
                </View>
                <View style={style.answerInfos}>
                  <View style={style.row}>
                    <Text style={style.username(true)}>{answer.username}</Text>
                    <View style={style.dot(true)}/>
                    <Text style={style.date(true)}>{answer.date}</Text>
                  </View>
                  <Text style={style.description(true)}>{answer.description}</Text>
                </View>
              </View>
            )))}
          </View>
        </View>
        <TouchableOpacity style={style.viewMoreArea} onPress={() => setViewMore(false)}>
          <Text style={style.viewMore}>Ocultar respostas</Text>
        </TouchableOpacity>
      </>
      
    )
  }

  return (
    <TouchableOpacity style={style.questionArea} key={question.id}>
      <View style={style.row}>
        <Text style={style.username()}>{question.username}</Text>
        <View style={style.dot()}/>
        <Text style={style.date()}>{question.date}</Text>
      </View>
      <Text style={style.description()}>{question.description}</Text>
      {(!viewMore && question.answers.length > 0) && (
        <>
          <View style={style.answerArea} key={question.answers[0]?.id} onLayout={getLastAnswerHeight}>
            <View style={style.answerLineArea}>
              <View style={style.answerLine}></View>
            </View>
            <View style={style.answerInfos}>
              <View style={style.row}>
                <Text style={style.username(true)}>{question.answers[0]?.username}</Text>
                <View style={style.dot(true)}/>
                <Text style={style.date(true)}>{question.answers[0]?.date}</Text>
              </View>
              <Text style={style.description(true)}>{question.answers[0]?.description}</Text>
            </View>
          </View>
          <TouchableOpacity style={style.viewMoreArea} onPress={() => setViewMore(true)}>
            <Text style={style.viewMore}>Ver mais {question.answers.length - 1} respostas</Text>
          </TouchableOpacity>
        </>
      )}
      {viewMore && (
        getAllAnswers()
      )}
    </TouchableOpacity>
  );
}