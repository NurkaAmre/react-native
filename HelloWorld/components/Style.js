import { View, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';

export default function Style() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View >
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance
        </Text>
      </View>
      {/* <View style={[styles.box, styles.sonic, styles.boxShadow, styles.androidShadow, {width: windowWidth > 500 ? "70%" : "90%",
     height: windowHeight >600 ? "40%" : "30%"}]}>
         <Text style={styles.title}>Sonic 😁👍</Text>
      </View> */}
      <View style={[styles.box, styles.amre, styles.androidShadow, {width: windowWidth > 500 ? "70%" : "90%",
     height: windowHeight > 600 ? "50%" : "60%"}]}>
        <Text style={{ fontSize: windowWidth > 600 ? 30 : 14 }}>Amre 😘💕</Text>
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
    ...Platform.select({
      ios: {
        borderColor: "blue",
        backgroundColor: "lightblue",
      },
      android: {
        borderColor: "yellow",
      }
    }),
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginVertical: 10,
    borderWidth: 3,
    borderRadius: 25,
  },
  sonic: {
    backgroundColor: "lightblue",
    fontSize: 24,
  },
  amre: {
    backgroundColor: "lightcoral",
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
