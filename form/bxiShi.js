import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("")
  const [isDark, setIsDark] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder='2222 2222 2222 2222'
        // autoCorrect={false}
        // autoCapitalize='none'
        // secureTextEntry
        // keyboardType='numeric'
      />   
      <TextInput style={[styles.input, styles.multilineText]} placeholder='message' multiline/>
      <Text style={styles.inputText}> My card is {name}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark mode</Text>
        <Switch
          value={isDark}
          onValueChange={() => setIsDark((previuosState) => !previuosState)}
          trackColor={{ false: "#767577", true: "#81boff" }}
          thumbColor={isDark ? "green" : "red"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 2,
  },
  inputText: {
    fontSize: 20,
    color: "#fff",
    font: "bold",
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  }
});
