import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.events.map(event => {

        return (
          <div key={event.id} className="data-list-item">
            <div className="details">
              <Link to={'/event/' + event.id}>{event.planet} {event.type} in {event.sign} at {event.degree}</Link>
            </div>
            <div className="controls">
              <button onClick={props.deleteEvent.bind(null, event.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
