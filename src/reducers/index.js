// plik do scalenia ze sobą powstałych reducerów
// moduł z redux'a

import { combineReducers } from 'redux';
import countriesReducer from './countries-reducer';

const reducers = combineReducers({
    countriesReducer
})

export default reducers;