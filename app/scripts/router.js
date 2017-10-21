import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import SplashScene from 'scenes/splash'
import SignUpScene from 'scenes/sign-up'
import EditProfileScene from 'scenes/edit-profile'
import PhoneNumberConfirmationScene from 'scenes/phone-number-confirmation'
import FindFaceScene from 'scenes/find-face'
import PaymentMethodsScene from 'scenes/payment-methods'
import ProfileScene from 'scenes/profile'
import CardsScene from 'scenes/cards'
import BillingScene from 'scenes/billing'

export const DashboardNavigator = DrawerNavigator({

    profile: {
        screen: ProfileScene,
    },

    cards: {
        screen: CardsScene,
    },

    billing: {
        screen: BillingScene,
    },

}, {
    initialRouteName: 'billing',
	headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
        title: 'Main',
        headerLeft: (
                        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                                      <Text>
                                                      Open
                                                                </Text>
                                                                        </TouchableOpacity>
        )
    })
})

export const RootNavigator = StackNavigator({

    splash: {
        screen: SplashScene,
    },

    signUp: {
        screen: SignUpScene,
    },

    completeProfile: {
        screen: EditProfileScene,
    },

    confirmPhoneNumber: {
        screen: PhoneNumberConfirmationScene,
    },

    findFace: {
        screen: FindFaceScene,
    },

    addPaymentMethod: {
        screen: PaymentMethodsScene,
    },

    dashboard: {
        screen: DashboardNavigator,
        navigationOptions: {
            gesturesEnabled: false,
        },
    },

}, {
    initialRouteName: 'splash',
})

class App extends React.Component {
    render() {
        const {dispatch, nav} = this.props
        return ( <RootNavigator navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: nav,
        })} />)
    }
}

const mapStateToProps = (store) => ({
    nav: store.rootRouter
})

export default connect(mapStateToProps)(App)
