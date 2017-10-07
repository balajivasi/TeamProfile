import { combineReducers } from 'redux'

import profileReducer from './profileReducer'

// this page will handel multiple reduces for large applications
const rootReducers=combineReducers({profileReducer})

export default rootReducers