import React from 'react'
import {NavigationActions} from 'react-navigation'
import { View, TouchableOpacity } from 'react-native'
import Text from 'components/text'

const Scene = (props) =>    <View>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('dashboard')
                                }}>
                                    <Text>PaymentMethodsScene</Text>
                                </TouchableOpacity>
                            </View>

export default Scene 
