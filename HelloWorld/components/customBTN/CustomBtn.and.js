import React from 'react'
import { Pressable, Text } from 'react-native'

const CustomBtnAnd = ({onPress, title}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 5,
        padding:10,
      }}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {title}
      </Text>
    </Pressable>
  )
}

export default CustomBtnAnd
