import React from 'react'
import { Link } from 'react-router'
import s from '../styles'
import Fa from 'react-fontawesome'

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div>
      <header style={{height: 50, display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: '#2e2c2c'}}>
        <span style={{flex: 0.4, color: '#fff', fontSize: 30, margin: 5, fontWeight: 300, whiteSpace: 'nowrap'}}><Fa style={{ margin: 5, color: '#fff' }} name="pied-piper-alt" size="3x" />AstroVox</span>
        <ul style={{height: 30, display: 'flex', flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center'}}>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/events" activeClassName="active">Events</Link></li>
          <li><Link to="/planets" activeClassName="active">Planets</Link></li>
          <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
          <li><Link to="/search" activeClassName="active"><Fa name="search" /></Link></li>
        </ul>
        <div style={{overflowX: 'scroll', height: 20, backgroundColor: '#eee'}}></div>
      </header>
      <div>
        <aside>

        </aside>
        <main style={{margin: 20}}>
          {props.children}
        </main>
      </div>
    </div>
    );
}
