import React, { useState, useEffect } from 'react';
//  import { View, Text, TouchableOpacity, StyleSheet, Pressable, Alert } from 'react-native';

 import { View, Text, TouchableOpacity, Pressable, Alert, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import  {Teste}  from './src/screens/inicial';





export default function App() {


return (
  // <SafeAreaView>


    <>
<StatusBar backgroundColor="transparent"
  barStyle="light-content"
  translucent={true} />

<Teste  />
</>
// </ SafeAreaView>

)
}

const styles = StyleSheet.create({
  bg: {
     backgroundColor: "#09090a",
 },
})






// export default function App() {
//   const [player1Score, setPlayer1Score] = useState(0);
//   const [player2Score, setPlayer2Score] = useState(0);
//   const [winner, setWinner] = useState('');
//   const [contadorP2, setContadorP2] = useState(0);
//   const [contadorP1, setContadorP1] = useState(0);



//   const incrementScore = (player: number) => {
//     if (player === 1) {
//       if (player1Score === 0) {
//         setPlayer1Score(15);
//       } else if (player1Score === 15) {
//         setPlayer1Score(30);
//       } else if (player1Score === 30) {
//         setPlayer1Score(40);
//       } else if (player1Score === 40) {
//         setPlayer1Score(50);
//         // setWinner('Player 1');
//         setPlayer1Score(0);
//         setsPlayer1()
//       }
//     } else if (player === 2) {
//       if (player2Score === 0) {
//         setPlayer2Score(15);
//       } else if (player2Score === 15) {
//         setPlayer2Score(30);
//       } else if (player2Score === 30) {
//         setPlayer2Score(40);
//       } else if (player2Score === 40) {
//         setPlayer2Score(50);
//         // setWinner('Player 2');
//         setPlayer2Score(0);
//         setsPlayer2();
//       }
//     }

// }



//   function setsPlayer1() {
//     setContadorP1(contadorP1 + 1)
//     if (contadorP1 === 5 && contadorP2 <= 4){
//       Alert.alert("Parabéns", "Você ganhou")
//       setContadorP1(0)
//      setContadorP2(0)
//      setPlayer1Score(0)
//      setPlayer2Score(0)
//     }  else if  (contadorP1 === 7 && contadorP2 <= 6){
//       Alert.alert("Parabéns", "Você ganhou")
//       setContadorP1(0)
//      setContadorP2(0)
//      setPlayer1Score(0)
//      setPlayer2Score(0)
//   } else if  (contadorP1 === 9 && contadorP2 <= 7){
//     Alert.alert("Parabéns", "Você ganhou")
//     setContadorP1(0)
//    setContadorP2(0)
//    setPlayer1Score(0)
//    setPlayer2Score(0)
// } 
// }

//   function setsPlayer2() {
//     setContadorP2(contadorP2 + 1)
//     if (contadorP2 === 5 && contadorP1 <= 4){
//       Alert.alert("Perdeu, trouxa!", "Não foi dessa vez")
//       setContadorP1(0)
//      setContadorP2(0)
//      setPlayer1Score(0)
//      setPlayer2Score(0)
//     } else if (contadorP2 === 7 && contadorP2 <= 6) {
//       Alert.alert("Perdeu, trouxa!", "Não foi dessa vez")
//       setContadorP1(0)
//      setContadorP2(0)
//      setPlayer1Score(0)
//      setPlayer2Score(0)
//     }  else if (contadorP2 === 9 && contadorP2 <= 7) {
//       Alert.alert("Perdeu, trouxa!", "Não foi dessa vez")
//       setContadorP1(0)
//      setContadorP2(0)
//      setPlayer1Score(0)
//      setPlayer2Score(0)
//     }  
//   };

  
// function zerar() {
//   setContadorP1(0)
//   setContadorP2(0)
//   setPlayer1Score(0)
//   setPlayer2Score(0)
// }

//   return (
//     // <View style={styles.container}>

//     <View className="bg-black flex-1 items-center justify-center mt-6">
      
//       <Pressable  onPress={zerar}>
//         <Text>Zerar</Text>
//       </Pressable>

//       <Text className='mt-6 text-zinc-400 font-semibold pt-16'>{contadorP1}</Text>
//       <Text>{contadorP2}</Text>

//       <View>
      
//         <TouchableOpacity onPress={() => incrementScore(1)}>
//           <Text>{player1Score}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => incrementScore(2)}>
//           <Text>{player2Score}</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <Text>Player 1</Text>
//         <Text>Player 2</Text>
//       </View>
//          </View>
//   );
// }






















/*

{ <View className="bg-black flex-1 items-center justify-center">
      
<Pressable  onPress={zerar}>
  <Text>Zerar</Text>
</Pressable>

<Text className='mt-6 text-zinc-400 font-semibold'>{contadorP1}</Text>
<Text style={styles.point}>{contadorP2}</Text>

<View style={styles.scoreContainer}>

  <TouchableOpacity onPress={() => incrementScore(1)}>
    <Text style={styles.score}>{player1Score}</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => incrementScore(2)}>
    <Text style={styles.score}>{player2Score}</Text>
  </TouchableOpacity>
</View>
<View style={styles.labelContainer}>
  <Text style={styles.label}>Player 1</Text>
  <Text style={styles.label}>Player 2</Text>
</View>
</View> }

*/










// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scoreContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   score: {
//     fontSize: 48,
//     marginHorizontal: 32,
//   },
//   labelContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 16,
//     width: '80%',
//   },
//   label: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   point: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 16,
//   },
// });