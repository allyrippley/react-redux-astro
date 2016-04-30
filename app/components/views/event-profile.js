import React from 'react'
import moment from 'moment'
// Using "Stateless Functional Components"
export default function(props) {
  window.console.log(props)
  return (
    <div className="planet-profile">
      <div className="details">
        <h1>{moment(props.date).format('MMMM Do, h:mma')}</h1>
        <h2>{props.planet} {props.type} in {props.sign} at {props.degree}</h2>
{/*        <a href={'http://twtter.com/' + props.twitter}>@{props.twitter}</a>
        <p>Works on <strong>{props.worksOn}</strong></p>
        <h3>Github Repos:</h3>
        <ul className="repos">

          {props.repos.map(repo => {

            return (<li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>);
return    {
      "id": 20,
      "date": "2016-06-20T07:02:00",
      "planet": "moon",
      "type": "full",
      "sign": "sagittarius",
      "degree": "29:33"
          })}
return;
        </ul>*/}
      </div>
    </div>
  );
}
