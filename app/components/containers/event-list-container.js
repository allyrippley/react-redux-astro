import React from 'react';
import { connect } from 'react-redux';
import EventList from '../views/event-list';
import * as eventApi from '../../api/event-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const EventListContainer = React.createClass({

  componentDidMount: function() {
    eventApi.getEvents();
    store.dispatch(loadSearchLayout('events', 'Event Results'));
  },

  render: function() {
    return (
      <EventList events={this.props.events} deleteEvent={eventApi.deleteEvent} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    events: store.eventState.events
  };
};

export default connect(mapStateToProps)(EventListContainer);
