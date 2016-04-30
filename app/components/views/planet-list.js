import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.planets.map(planet => {

        return (
          <div key={planet.id} style={{display: 'flex', flexDirection: 'row'}}>
            <div className="details">
              <Link to={'/planet/' + planet.id}>{planet.name}</Link>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <button onClick={props.deletePlanet.bind(null, planet.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
