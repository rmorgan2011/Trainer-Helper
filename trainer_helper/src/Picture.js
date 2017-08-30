import React from 'react';
import ReactToolTip from 'react-tooltip';
import PropTypes from 'prop-types';
import Types from './helpers/Types'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'


function Picture(props){
      var stats = props.pic.stats.map((element) => <p key={element.stat.name + element.base_stat}>{element.stat.name.charAt(0).toUpperCase() + element.stat.name.slice(1)}: {element.base_stat}</p>)
      stats.reverse()
      return(

        <div data-tip data-for={props.pic.name} key={props.pic.name} style={{position: 'relative', color: '#f0f0f0', background: '#222224', borderRadius: '5px', borderStyle: 'solid', borderWidth: '2px', padding: '5px', margin: '10px'}}>
          <img src={props.pic.sprites.front_default} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '130px', height: '130px'}} alt='loading'/>
          <Types types= {props.pic.types} id= {props.pic.id} name= {props.pic.name.charAt(0).toUpperCase() + props.pic.name.slice(1)}/>
          <ReactToolTip id={props.pic.name}>
            <h1 style={{borderBottom: '1px', borderStyle: 'solid', borderRight: '0px', borderTop: '0px', borderLeft: '0px', paddingRight: '10px'}}>{props.pic.name.charAt(0).toUpperCase() + props.pic.name.slice(1)}</h1>
            <p>Type: {props.pic.types.map((element) => " " + element.type.name.charAt(0).toUpperCase() + element.type.name.slice(1)) + " "}</p>
            {stats}
          </ReactToolTip>
        </div>
        )
}

Picture.propTypes = {
  pic: PropTypes.object
}

export default Picture;
