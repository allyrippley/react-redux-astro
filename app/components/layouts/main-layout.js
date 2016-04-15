import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <aside className="primary-aside">
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/events" activeClassName="active">Events</Link></li>
          <li><Link to="/planets" activeClassName="active">Planets</Link></li>
          <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    );
}
