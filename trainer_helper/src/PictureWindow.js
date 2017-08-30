import React from 'react';
import PropTypes from 'prop-types';
import Picture from './Picture';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function filterElement(element,id){
  if(!id){
    return <Picture key={element.id} pic={element}/>
  }
  else if(element.types.length === 1 && element.types[0].type.name === id){
  return <Picture key={element.id} pic={element}/>
  }
  else if(element.types.length ===2 && (element.types[0].type.name === id || element.types[1].type.name === id)){
    return <Picture key={element.id} pic={element}/>
  }

}

function PictureWindow(props){
  console.log(props.match)
  var newArray = [];
  var typeLinks = [];
  if(props.pictures.length > 0){
    newArray = props.pictures.map((element) => filterElement(element,props.match.params.id))
  }
  console.log(newArray)
  if(newArray[0] === undefined){
    newArray[0] = <div>None Available</div>
  }
  //var newerArray = data.map((element) => (element.types[0].type.name === 'flying') ?  <Picture  key={element.id} pic={element}/> : <div/>)

  return(
    <div style={{alignContent: 'center', display: 'flex', flexWrap: 'wrap', borderStyle: 'solid', borderWidth: '2px', margin: '20px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', width:'auto'}}>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>{typeLinks}</div>
      {newArray}
    </div>
  )
}

PictureWindow.propTypes = {
  pictures: PropTypes.array
}

export default PictureWindow;
