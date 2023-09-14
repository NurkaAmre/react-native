import { View, StyleSheet, Text, Dimensions, SafeAreaView, Platform} from 'react-native';
import Style from './components/Style';
import Box from './components/Box';
import CustomBtn from './components/customBTN/CustomBtn.ios';
import CustomBtnAnd from './components/customBTN/CustomBtn.and';

export default function App() {
  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <Style />
        <CustomBtn title="Press" onPress={() => alert("pressed!")} />
        <CustomBtnAnd title="Enter" onPress={() => alert("entered!")} />
      </View> 
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderColor: "purple",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  }
})