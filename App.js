import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

export default function App() {
  const [ok, setOK] = useState(false)

  const showAlert = () => {
    Alert.alert(
      "Otsikko",
      "Testataan alerttia!",
      [
        {
          text: 'OK',
          onPress: () => setOK(true)
        },
        {
          text: 'Cancel',
          onPress: () => setOK(false)
        }
      ]
    )
  }
  return (
    <View style={styles.container}>
      <Button title={'Open alert'} onPress={showAlert} />
      <Text>{ok===true ? 'ok' : 'cancel'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
