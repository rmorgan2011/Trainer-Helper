import React, { Component } from 'react';
import PictureWindow from './PictureWindow'
import './App.css';
import "core-js/fn/symbol/iterator.js";
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import {typesColor} from './helpers/Types'

const typeStrings =['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','fairy']
const typeLinks = typeStrings.map((name) => <NavLink key={name} style={{textDecoration: 'none', color: 'black', margin: '10px', padding: '1px', paddingRight: '3px',paddingLeft: '3px',borderWidth: '2px', borderRadius: '4px', borderStyle: 'solid', background: typesColor(name)}}to={name}>{name.charAt(0).toUpperCase() +name.slice(1)}</NavLink>)

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
      <BrowserRouter>
      <div  style={{background: '#ee1515', display: 'inline-block',  margin: '20px',borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px'}}>
      <div style= {{marginBottom: '10px'}}>
      <form style={{background: '#f0f0f0', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}onSubmit={(e) => this.update(e)}>
      <div style={{display: 'flex', padding: '10px',width:'500px'}}>
        <div style={{display: 'flex', alignItems: 'center', marginLeft: '40px'}}>Range: </div>
        <input min='1' max='721' type= 'number' inputMode = 'numeric' style = {{margin: '10px'}} onChange={(e) => this.updateLow(e)}/>
        <input min='1' max='721' type= 'number' inputMode = 'numeric' style = {{margin: '10px'}} onChange={(e) => this.updateHigh(e)}/>
        <button type='submit'>Submit</button>
        
      </div>
      
      </form>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <NavLink style={{textDecoration: 'none', color: 'black', margin: '10px', padding: '1px', paddingRight: '2px',paddingLeft: '3px',borderWidth: '2px', borderRadius: '4px', borderStyle: 'solid', background: 'white'}}to=''>None</NavLink>
        {typeLinks}
      </div>
        <Route path="/" exact render={(props) => <PictureWindow key= "/" match={props.match} style={{}}pictures={this.state.pictures}/>} />
        <Route path="/:id" render={(props) => <PictureWindow key= {props.match.id} match={props.match} style={{}}pictures={this.state.pictures}/>}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
