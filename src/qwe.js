import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export const Schet = () => {
  let [h, setText] = useState('');
  let [b, setTextb] = useState('');
  return (
    <View>
      <TextInput
        style={{width: 300,
          height: 40,
          borderWidth: 1,
          borderColor: '#9966CC',
          borderRadius: 20,
          textAlign: 'center',
          fontSize: 20,
          color: '#003153',
          marginBottom: 20}} 
          keyboardType='numeric' 
          placeholder="Введите высоту"
          onChangeText={text => setText(text)}
          defaultValue={h} />
      <TextInput
        style={{width: 300,
          height: 40,
          borderWidth: 1,
          borderColor: '#9966CC',
          borderRadius: 20,
          textAlign: 'center',
          fontSize: 20,
          color: '#003153',
          marginBottom: 50}} 
          keyboardType='numeric'
          placeholder="Введите основание"
          onChangeText={text => setTextb(text)}
          defaultValue={b} />
      <Button 
            title="Расчет" 
            onPress={() => { 
              let S;
              if(h==0 || b==0){
                alert("Заполните все поля");
              }
              else{
                S = 0.5*b*h;
                alert("Площадь = "+ S);
              }
            }} />
    </View>
  );
}