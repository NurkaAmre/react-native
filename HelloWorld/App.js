import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';
import Style from './components/Style';

export default function App() {
  return (
    <View style={styles.container}>
      <Style />
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    padding: 60,
  }
})