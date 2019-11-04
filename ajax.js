//create a new XMLHttpRequest and assign it to a global variable
var http        = new XMLHttpRequest(),
    buttonData  = document.querySelector('#button-data'),
    buttonAbl   = document.querySelector('#button-abilities'),
    displayData = document.querySelector('#pokemon-data'),
    displayAbl  = document.querySelector('#pokemon-abl');
    
http.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu", true);

http.onload = () => { 
  const okStatus = ( http.status == 200 ),
        pokemon        = JSON.parse( http.response ),
        pokeAblities   = pokemon.abilities,
        pokeTypes      = pokemon.types,
        pokeStats      = pokemon.stats,
        statsNames     = pokeStats.map( stats => stats.stat.name ),
        statsBases     = pokeStats.map( stats => stats.base_stat ),
        typesNames     = pokeTypes.map( types => types.type.name ),
        abilitiesNames = pokeAblities.map( abilities => abilities.ability.name);

  let output = '';

  console.log(pokemon)
  console.log(statsNames)
  console.log(statsBases)
  console.log(typesNames)
  console.log(abilitiesNames)



  for( let type in typesNames ){
    var typesList = typesNames[type];
  }

  // for( let statName in statsNames  ){
  //   var namesList = statsNames[statName];
  //   console.log(namesList)
  // }

  // for( let stat in statsBases ){
  // var output2 = `
  //     <li>${pokeStats[stat].base_stat}</li>
  // `; 
  // console.log(pokeStats[stat].base_stat)
  // console.log(output2)
  // }
  
  if( okStatus ) {
    buttonData.addEventListener('click', () => {
      output  = `
        <ul>
          <li>name: ${ pokemon.name }</li>
          <li>order: ${ pokemon.order }</li>
          <li>type: ${ typesList }</li>
        </ul>
      `; 
      displayData.innerHTML = output;
    })
  }
}

// sends the request 
http.send();
