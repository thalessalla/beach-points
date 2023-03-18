import React, { useState, useEffect } from 'react';
 import { View, Text, TouchableOpacity, Pressable, Alert, StyleSheet, Button, Vibration } from 'react-native';
import Plus from "../img/plus.svg";
import * as Haptics from 'expo-haptics';
// import Svg, { Path } from 'react-native-svg';



 

  export function Teste() {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [winner, setWinner] = useState('');
    const [contadorP2, setContadorP2] = useState(0);
    const [contadorP1, setContadorP1] = useState(0);
  
  
  
    const incrementScore = (player: number) => {
      if (player === 1) {
        if (player1Score === 0) {
          setPlayer1Score(15);
        } else if (player1Score === 15) {
          setPlayer1Score(30);
        } else if (player1Score === 30) {
          setPlayer1Score(40);
        } else if (player1Score === 40) {
          setPlayer1Score(50);
          Vibration.vibrate(5)
          setPlayer1Score(0);
          setsPlayer1()
        }
      } else if (player === 2) {
        if (player2Score === 0) {
          setPlayer2Score(15);
        } else if (player2Score === 15) {
          setPlayer2Score(30);
        } else if (player2Score === 30) {
          setPlayer2Score(40);
        } else if (player2Score === 40) {
          setPlayer2Score(50);
          Vibration.vibrate(5)
          setPlayer2Score(0);
          setsPlayer2();
        }
      }
  
  }
  
  
  
    function setsPlayer1() {
      setContadorP1(contadorP1 + 1)
      if (contadorP1 === 5 && contadorP2 <= 4){
        Alert.alert("Parabéns", "Você ganhou")
        setContadorP1(0)
       setContadorP2(0)
       setPlayer1Score(0)
       setPlayer2Score(0)
      }  else if  (contadorP1 === 6 && contadorP2 <= 5){
        Alert.alert("Parabéns", "Você ganhou")
        setContadorP1(0)
       setContadorP2(0)
       setPlayer1Score(0)
       setPlayer2Score(0)
    } else if  (contadorP1 === 8 && contadorP2 <= 6){
      Alert.alert("Parabéns", "Você ganhou")
      setContadorP1(0)
     setContadorP2(0)
     setPlayer1Score(0)
     setPlayer2Score(0)
  } 
  }
  
    function setsPlayer2() {
      setContadorP2(contadorP2 + 1)
      if (contadorP2 === 5 && contadorP1 <= 4){
        Alert.alert("Você perdeu :(", "Não foi dessa vez")
        setContadorP1(0)
       setContadorP2(0)
       setPlayer1Score(0)
       setPlayer2Score(0)
      } else if (contadorP2 === 6 && contadorP1 <= 5) {
        Alert.alert("Você perdeu :(", "Não foi dessa vez")
        setContadorP1(0)
       setContadorP2(0)
       setPlayer1Score(0)
       setPlayer2Score(0)
      }  else if (contadorP2 === 8 && contadorP1 <= 7) {
        Alert.alert("Você perdeu :(", "Não foi dessa vez")
        setContadorP1(0)
       setContadorP2(0)
       setPlayer1Score(0)
       setPlayer2Score(0)
      }  
    };
  
    
  function zerar() {
    setContadorP1(0)
    setContadorP2(0)
    setPlayer1Score(0)
    setPlayer2Score(0)
  }
  
    return (
      // <View style={styles.container}>
  
      <View className="bg-dark flex-1 items-center justify-center ">

       
        <TouchableOpacity style={styles.box} className='bg-danger w-80 py-3 rounded-xl' onPress={zerar}>
          <Text className=' text-primary font-semibold text-center'>Zerar</Text>
        </TouchableOpacity>

        <Text className='text-secundary mt-4' >Sets</Text>
  
  <View className='flex-row justify-between items-center'>
        <Text className=' text-primary font-semibold text-3xl'>{contadorP1}</Text>
        <Text className=' text-secundary font-semibold'> x </Text>
        <Text className=' text-primary font-semibold text-3xl'>{contadorP2}</Text>
</View>  

<View className='flex-row justify-between items-center w-4/5' >
          
          
        </View>

        <View className='flex-row justify-between w-4/5 mt-4'>
        
        <View style={styles.box} className='jutify-center flex bg-item rounded-xl w-32 '>

        <Text className=' text-secundary font-semibold text-center p-4'>Meu time</Text>
          <TouchableOpacity onPress={() => incrementScore(1)}>
            <Text className='text-primary font-bold text-7xl text-center'>{player1Score}</Text>
            <View  className="mx-auto mb-4">
            <Plus height={40} width={40} className="mx-auto translate-x-40"/>
            </View>
            </TouchableOpacity>

</View>


<View style={styles.box} className='jutify-center flex bg-item rounded-xl w-32' >

<Text className=' text-secundary font-semibold text-center p-4'>Adversário</Text>


          <TouchableOpacity onPress={() => incrementScore(2)}>
            <Text className='text-primary font-bold text-7xl text-center'>{player2Score}</Text>
            <View  className="mx-auto mb-4">
            <Plus height={40} width={40} className="mx-auto translate-x-40"/>
            </View>
          </TouchableOpacity>
          

</View>

        </View>
      
           </View>
    );
  }
  
  const styles = StyleSheet.create({
        shadow: {
         
       },
       box: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5, // somente para Android
      },
  })