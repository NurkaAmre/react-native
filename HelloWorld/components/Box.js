import { View, Text, StyleSheet } from "react-native"

const Box = ({children, style}) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "lightblue",
    padding: 10,
    width: 100,
    height: 100,

  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  }
})

export default Box
