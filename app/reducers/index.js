import { combineReducers } from 'redux'

// Reducers
import eventReducer from './event-reducer'
import planetReducer from './planet-reducer'
import widgetReducer from './widget-reducer'
import searchLayoutReducer from './search-layout-reducer'

// Combine Reducers
var reducers = combineReducers({
    eventState: eventReducer,
    planetState: planetReducer,
    widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer
})

export default reducers
