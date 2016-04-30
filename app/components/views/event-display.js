import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div style={{margin: 10}}>
      Time now: {moment().format('MMMM Do, h:mma')}
      {props.events.map(event => {

        return (
          <div key={event.id} style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="details">
              <Link to={'/events/' + event.id}>{event.planet} {event.type} in {event.sign} at {event.degree} on {moment(event.date).format('MMMM Do, h:mma')}</Link>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <button style={{backgroundColor: '#555', color: '#ccc', border: 'none', borderRadius: 5}} onClick={props.deleteEvent.bind(null, event.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
