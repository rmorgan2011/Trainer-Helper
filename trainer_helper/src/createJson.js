var tempArray = []
    for(var i = Number(1); i <= Number(10); i++){
      tempArray[i-1] = fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/', {cache: 'force-cache'}).then(
                      function(response){
                        return response.json()
                      })
    }
    Promise.all(tempArray).then(function(data){
      for(var i = 0; i < data.length; i++){
        console.log([data[i]])
      }
    })