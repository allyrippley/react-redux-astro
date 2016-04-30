import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  events: []
};

const eventReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_EVENTS_SUCCESS:
      return Object.assign({}, state, { events: action.events });

    case types.DELETE_EVENT_SUCCESS:

      // Use lodash to create a new event array without the event we want to remove
      const newEvents = _.filter(state.events, event => event.id != action.eventId);
      return Object.assign({}, state, { events: newEvents });

    case types.EVENT_PROFILE_SUCCESS:
      return Object.assign({}, state, { eventProfile: action.eventProfile });
  }

  return state;

}

export default eventReducer;
