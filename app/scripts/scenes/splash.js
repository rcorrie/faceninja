import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from 'components/text'

const SplashScene = (props) =>  <View>
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.navigate('signUp')
                                    }}>
                                        <Text>Splash</Text>
                                    </TouchableOpacity>
                                </View>

export default SplashScene
