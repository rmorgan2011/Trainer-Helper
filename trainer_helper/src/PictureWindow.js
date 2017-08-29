import React from 'react';
import PropTypes from 'prop-types';
import Picture from './Picture'
import data from './pokemon-data/dataTest.json'


function PictureWindow(props){

  var newArray = [];

  if(props.pictures.length > 0){
    newArray = props.pictures.map((element) => <Picture  key={element.id} pic={element}/>)
  }
  var newerArray = data.map((element) => (element.types[0].type.name === 'flying') ?  <Picture  key={element.id} pic={element}/> : <div/>)

  return(
    <div style={{alignContent: 'center', display: 'flex', flexWrap: 'wrap', borderStyle: 'solid', borderWidth: '2px', margin: '20px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', width:'auto'}}>
     
      {newerArray}
      {newArray}
    </div>
  )
}

PictureWindow.propTypes = {
  pictures: PropTypes.array
}

export default PictureWindow;
