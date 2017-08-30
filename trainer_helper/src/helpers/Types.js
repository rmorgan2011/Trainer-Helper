import React from 'react';

export function typesColor(type){
    switch(type){
    case 'normal': return '#A8a77a';
    case 'fighting': return '#c22e28';
    case 'flying': return '#a98ff3';
    case 'poison': return '#a33ea1';
    case 'ground': return '#e2bf65';
    case 'rock': return '#b6a136';
    case 'bug': return '#a6b91a';
    case 'ghost': return '#735797';
    case 'steel': return '#b7b7ce';
    case 'fire': return '#ee8130';
    case 'water': return '#6390f0';
    case 'grass': return '#7ac74c';
    case 'electric': return '#f7d02c';
    case 'psychic': return '#f95587';
    case 'ice': return '#96d9d6';
    case 'dragon': return '#6f35fc';
    case 'dark': return '#705746';
    case 'fairy': return '#d685ad';
    default: return 'black';
    }
}



function Types(props){
    var nameTag = '#' + props.id + ': ' + props.name
    if(props.types.length === 1){
     return (
            <div style={{paddingBottom: '5px',background: typesColor(props.types[0].type.name), borderRadius: '5px', borderStyle: 'solid', borderWidth: '2px', padding: '3px'}}>
                <div style={{textAlign: 'center'}}>{nameTag}</div>
            </div>
     )
    }
    else{
        return(

            <div style={{paddingBottom: '5px', background: 'linear-gradient(to right, ' + typesColor(props.types[0].type.name) +' 50%,' + typesColor(props.types[1].type.name) + ' 50%)' , borderRadius: '5px', borderStyle: 'solid', borderWidth: '2px', padding: '3px'}}>
                <div style={{textAlign: 'center'}}>{nameTag}</div>
            </div>

        )
    }
}


export default Types;
