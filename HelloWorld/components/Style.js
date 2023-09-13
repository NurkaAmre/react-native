import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';

export default function Style() {
  return (
    <View >
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance
        </Text>
      </View>
      <View style={[styles.box, styles.sonic, styles.boxShadow, styles.androidShadow]}>
         <Text style={styles.title}>Sonic 😁👍</Text>
      </View>
      <View style={[styles.box, styles.amre, styles.androidShadow]}>
         <Text style={styles.title}>Amre 😘💕</Text>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({

  darkMode: {
    backgroundColor: "#000", 
  },
  darkModeText: {
    color: "#fff",
  },
  box: {
    width: '100%',
    height: '30%',
    // padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: "red",
    borderRadius: 25,
  },
  sonic: {
    backgroundColor: "lightblue",
  },
  amre: {
    backgroundColor: "lightcoral",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  boxShadow: {
    shadowColor: "blue",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  androidShadow: {
    shadowColor: "blue",
    elevation: 30,
  }
})
