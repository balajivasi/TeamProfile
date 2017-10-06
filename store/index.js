import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import profileReducer from '../reducers/profileReducer'
import configData from '../data/globalData'

let initialState={
	configData:configData
}
console.log(initialState)

const store=compose(applyMiddleware(thunk))(createStore)(profileReducer,initialState);


export default store;