import React from 'react'
import { Pressable, Text } from 'react-native'

const CustomBtn = ({onPress, title}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
        borderRadius: 20,
        padding:10,
      }}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {title}
      </Text>
    </Pressable>
  )
}

export default CustomBtn
