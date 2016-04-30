import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

const mapStateToProps = function(store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0

  switch(searchType) {
    case 'planets':
      totalResults = store.planetState.planets.length
      break
    case 'widgets':
      totalResults = store.widgetState.widgets.length
      break
    case 'events':
      totalResults = store.eventState.events.length;
      break
    default:
      totalResults = totalResults
  }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults
  };

};

export default connect(mapStateToProps)(SearchLayout);
