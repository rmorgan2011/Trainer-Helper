import React, { Component } from 'react';
import PictureWindow from './PictureWindow'
import './App.css';
import "core-js/fn/symbol/iterator.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      lowRange: 1,
      highRange: 10,
      pictures: []
    }
    this.performFetch = this.performFetch.bind(this);
    this.updateLow = this.updateLow.bind(this);
    this.updateHigh = this.updateHigh.bind(this);
    this.update = this.update.bind(this);
    this.sortArray = this.sortArray.bind(this);
  }
  performFetch(lowRange,highRange){
    const appContext = this;
    
    var tempArray = []
    for(var i = Number(lowRange); i <= Number(highRange); i++){
      tempArray[i-lowRange] = fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/', {cache: 'force-cache'}).then(
                      function(response){
                        return response.json()
                      })
    }
    Promise.all(tempArray).then(function(data){
      for(var i = 0; i < data.length; i++){
        appContext.setState({pictures: appContext.state.pictures.concat([data[i]])})
      }
      appContext.sortArray(appContext)
    })
  }

  

  sortArray(appContext){
    appContext.setState({pictures: this.state.pictures.sort(function(a,b){
      if(Number(a.id) > Number(b.id)){
        return 1;
      }
      else if(Number(a.id) === Number(b.id)){
        return 0;
      }
      else{
        return -1;
      }
    })})
  }

  update(e){
    e.preventDefault()
    const appContext = this;
    if( Number(appContext.state.lowRange) <= Number(appContext.state.highRange) && Number(appContext.state.lowRange) > 0){
      appContext.setState({pictures: []})
      appContext.performFetch(appContext.state.lowRange,appContext.state.highRange);
    }
  }

  componentDidMount(){
    this.performFetch(this.state.lowRange,this.state.highRange);
  }

  updateLow(e){
    this.setState({lowRange: e.target.value})
  }

  updateHigh(e){
    this.setState({highRange: e.target.value})
  }

  render() {

    return (
      <div  style={{background: '#ee1515', display: 'inline-block',  margin: '20px',borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px'}}>
      <form style={{background: '#f0f0f0', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}onSubmit={(e) => this.update(e)}>
      <div style={{display: 'flex', padding: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', marginLeft: '40px'}}>Range: </div>
        <input min='1' max='721' type= 'number' inputMode = 'numeric' style = {{margin: '10px'}} onChange={(e) => this.updateLow(e)}/>
        <input min='1' max='721' type= 'number' inputMode = 'numeric' style = {{margin: '10px'}} onChange={(e) => this.updateHigh(e)}/>
        <button type='submit'>Submit</button>
      </div>
      </form>
      
        <PictureWindow style={{}}pictures={this.state.pictures}/>
      
      </div>
    );
  }
}

export default App;
