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
      profile.name = event.name;
      profile.desc = !event.desc ? 'No description available' : event.desc;

      // Then use the github attribute from the previous request to
      // sent two XHR requests to GitHub's API. The first for their
      // general event info, and the second for their repos.
      // return Promise.all([
      //   axios.get('https://api.github.com/events/' + event.github),
      //   axios.get('https://api.github.com/events/' + event.github + '/repos')
      // ]).then(results => {
      //
      //   let githubProfile = results[0].data;
      //   let githubRepos = results[1].data;
      //
      //   profile.imageUrl = githubProfile.avatar_url;
      //   profile.repos = githubRepos;
      //
      //   store.dispatch(eventProfileSuccess(profile));
      //
      //   return;
      //
      // });

    });

}
