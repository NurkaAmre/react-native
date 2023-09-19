import { StyleSheet, Text, View, StatusBar, TextInput, Button, Image, KeyboardAvoidingView, Platform} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}
    if (!name) {
      errors.name = "UserName is required"
    }
    if (!password) {
      errors.password = "Password is required"
    }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", name, password)
      setName("")
      setPassword("")
      setErrors({})
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      // behavior='padding' use only for ios
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.form}>
        <Image
          source={{ uri: "https://images-prod.dazeddigital.com/1920/azure/dazed-prod/1180/1/1181603.jpg"}}
          style={styles.image}
        />
        <Text style={styles.label}>UserName</Text>
        <TextInput
          placeholder='Enter your username'
          style={styles.input}
          value={name}
          onChangeText={ setName}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={ setPassword}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        <Button
          title="Login"
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "plum",
    paddingTop: StatusBar.currentHeight
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  button: {
    color: "#fff",
    backgroundColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    cursor: "pointer",
  },
  image: {
    width: 350,
    height: 200,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  }
});
