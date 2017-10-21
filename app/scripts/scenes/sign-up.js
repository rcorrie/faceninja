import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from 'components/text'

const Scene = (props) =>    <View>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('completeProfile')
                                }}>
                                    <Text>SignUpScene</Text>
                                </TouchableOpacity>
                            </View>

export default Scene 
