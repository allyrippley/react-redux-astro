import axios from 'axios';
import store from '../store';
import { getEventsSuccess, deleteEventSuccess, eventProfileSuccess } from '../actions/event-actions';

/**
 * Get all events
 */

export function getEvents() {
  return axios.get('http://localhost:3001/events')
    .then(response => {
      store.dispatch(getEventsSuccess(response.data));
      return response;
    });
}

/**
 * Search events
 */

export function searchEvents(query = '') {
  return axios.get('http://localhost:3001/events?q='+ query)
    .then(response => {
      store.dispatch(getEventsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a event
 */

export function deleteEvent(eventId) {
  return axios.delete('http://localhost:3001/events/' + eventId)
    .then(response => {
      store.dispatch(deleteEventSuccess(eventId));
      return response;
    });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getProfile(eventId) {

  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};

  // Get the event data from our local database.
  return axios.get('http://localhost:3001/events/' + eventId)
    .then(response => {

      let event = response.data;
      profile.date = event.date
      profile.id = event.id
      profile.planet = event.planet
      profile.type = event.type
      profile.sign = event.sign
      profile.degree = event.degree ? event.degree : ''

      store.dispatch(eventProfileSuccess(profile));
      return;
    });

}
