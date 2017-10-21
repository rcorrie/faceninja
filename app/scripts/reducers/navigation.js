import Router, {RootNavigator, OnboardingNavigator, DashboardNavigator} from 'app/router'

export const rootRouter = (state, action) => {

    const newState = RootNavigator.router.getStateForAction(action, state)

    return newState || state

}

export const dashboardRouter = (state, action) => {

    let newState = state || {}

    if(DashboardNavigator) {
        newState = DashboardNavigator.router.getStateForAction(action, state)
    }

    return newState 

}
