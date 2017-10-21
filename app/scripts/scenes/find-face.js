import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from 'components/text'

const Scene = (props) =>    <View>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('addPaymentMethod')
                                }}>
                                    <Text>FindFaceScene</Text>
                                </TouchableOpacity>
                            </View>

export default Scene 
