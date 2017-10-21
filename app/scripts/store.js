import { applyMiddleware, createStore, combineReducers } from 'redux'
import { rootRouter, dashboardRouter, onboardingRouter } from 'reducers/navigation'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import ReduxThunk from 'redux-thunk'

const middleware = applyMiddleware(ReduxThunk, promise(), logger())

const reducers = combineReducers({

    rootRouter,
    onboardingRouter,
    dashboardRouter,

})

const store = createStore(reducers, middleware)

export default store


