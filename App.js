import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Button from './components/Button'
import CHOICES from './utils/Choices'

export default function App() {
  const [gamePrompt, setGamePrompt] = useState('Jankenpon!')
  const [userChoice, setUserChoice] = useState({})
  const [computerChoice, setComputerChoice] = useState({})

  const bgImage = {
    uri: 'https://i.pinimg.com/originals/fe/0c/31/fe0c31f33c1a38855c01ed589437cb6b.jpg'
  };

  const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

  const getRoundOutcome = (userChoice) => {
    const computerChoice = randomComputerChoice().name;
    let result;

    if (userChoice === 'foot') {
      result = computerChoice === 'bomb' ? 'Victory!' : 'Defeat!';
    };
    if (userChoice === 'bomb') {
      result = computerChoice === 'cockroach' ? 'Victory!' : 'Defeat!';
    };
    if (userChoice === 'cockroach') {
      result = computerChoice === 'foot' ? 'Victory!' : 'Defeat!';
    };
    if (userChoice === computerChoice) result = 'Tie game!';
    return [result, computerChoice];
  };

  const pressChoice = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  console.log('phil', userChoice)
  console.log('computer', computerChoice)
  return (
    <ImageBackground style={styles.bg} source={bgImage}>
      <View style={styles.container}>
        <View style={styles.choicesContainer}>
          <View>
            <Text style={styles.gamePromptText}>{gamePrompt}</Text>
          </View>
          {/* needs its own style  */}
          <View style={styles.playersContainer}>
            <View style={styles.choiceContainer}>
              <Text style={styles.choiceDescription}>
                Player
              </Text>
              <Image
                source={{ uri: userChoice.uri }}
                resizeMode="contain"
                style={styles.choiceImage}
              />
              <Text style={styles.choiceCardTitle}>
                {userChoice.name}
              </Text>
            </View>
            <Text style={{ color: '#250902', paddingTop: 130 }}>vs</Text>
            <View style={styles.choiceContainer}>
              <Text style={styles.choiceDescription}>
                Computer
              </Text>
              <Image
                source={{ uri: computerChoice.uri }}
                resizeMode="contain"
                style={styles.choiceImage}
              />
              <Text style={styles.choiceCardTitle}>
                {computerChoice.name}
              </Text>
            </View>
          </View>
        </View>


        {
          CHOICES.map(choice => {
            return <Button key={choice.name} name={choice.name} pressChoice={pressChoice} />;
          })
        }
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamePromptText: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    paddingTop: 50
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    // paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: .8,
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
  playersContainer: {
    // flex: 1,
    flexDirection: 'row'
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
});
