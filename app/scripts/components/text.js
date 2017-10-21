import React from 'react'
import { Text } from 'react-native'

const TextExtended = ({style, children}) => <Text style={[baseStyle, style]}>{children}</Text>

const baseStyle = {
    color: 'red',
    margin: 100,

}

export default TextExtended
