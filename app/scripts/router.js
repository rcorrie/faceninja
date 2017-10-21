import React from 'react'
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
	navigationOptions : {
		drawerLabel: 'Notifications'
	},
})

export const OnboardingNavigator = StackNavigator({

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


}, {
    initialRouteName: 'splash',
})

export const RootNavigator = StackNavigator({

    onboarding: {
        screen: OnboardingNavigator,
        navigationOptions: {
            gesturesEnabled: false,
        },
    },

    dashboard: {
        screen: DashboardNavigator,
        navigationOptions: {
            gesturesEnabled: false,
        },
    },

}, {
    initialRouteName: 'onboarding',
    headerMode: 'none',
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
