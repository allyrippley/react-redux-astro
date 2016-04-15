import * as types from '../actions/action-types';

export function getEventsSuccess(events) {
  return {
    type: types.GET_EVENTS_SUCCESS,
    events
  };
}

export function deleteEventSuccess(eventId) {
  return {
    type: types.DELETE_EVENT_SUCCESS,
    eventId
  };
}

export function eventProfileSuccess(eventProfile) {
  return {
    type: types.EVENT_PROFILE_SUCCESS,
    eventProfile
  };
}
