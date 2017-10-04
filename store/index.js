import {createStore} from 'redux'

import rootreducer from '../reducers'

import globalData from '../data/globalData'

const defaultState={
	globalData
}
const Store=createStore(rootreducer,defaultState)


export default Store;