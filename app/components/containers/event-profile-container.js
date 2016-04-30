import React from 'react';
import { connect } from 'react-redux';
import EventProfile from '../views/event-profile';
import * as eventApi from '../../api/event-api';

const EventProfileContainer = React.createClass({

  componentDidMount: function() {
    let eventId = this.props.params.eventId
    eventApi.getProfile(eventId)
  },

  render: function() {
    window.console.log(this.props.profile)
    return (
      <EventProfile {...this.props.profile} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.eventState.eventProfile
  };
};

export default connect(mapStateToProps)(EventProfileContainer);
