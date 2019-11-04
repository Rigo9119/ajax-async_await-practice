var buttonData   = document.querySelector('#button-data'),
    displayData  = document.querySelector('#pokemon-data'),
    displayAbl   = document.querySelector('#pokemon-abilities'),
    displayStats = document.querySelector('#pokemon-stats');

async function pokeFetch(pokemon) {
  try {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`),
          data = await res.json();

    return data;

  } catch (err) {

    console.log(err);

  }
}

pokeFetch('bulbasaur').then(pokemon => {
  let name         = pokemon.name,
      id           = pokemon.id,
      order        = pokemon.order,
      abilities    = pokemon.abilities,
      abilityList  = abilities.map( abilities => abilities.ability.name ),
      statsList    = pokemon.stats,
      statsNames   = statsList.map( stats => stats.stat.name ),
      statsBases   = statsList.map( stats => stats.base_stat),
      groupStats   = {}
      statsNames.forEach((name, base) => groupStats[name] = statsBases[base]),
      objStatToArr = Object.entries( groupStats ),
      types        = pokemon.types,
      type         = types.map( types => types.type.name );

  buttonData.addEventListener('click', () => {
    let showStats = '',
        showAbilities = '',
        showData = '';

    for(let [stname, stbase] of objStatToArr) {
      let stnamestr = stname.toString();
      showStats += `
        <ul>
          <li>${stnamestr + ': ' + stbase}</li>
        </ul>
      `;
    }

    for(let ability in abilityList) {
      showAbilities += `
        <ul>
          <li>${abilityList[ability]}</li>
        </ul>
      `;
    }

    showData += `
      <ul>
        <li>name: ${name}</li>
        <li>id: ${id}</li>
        <li>order: ${order}</li>
        <li>type: ${type}</li>
      </ul>
    `;

    displayData.innerHTML = showData
    displayAbl.innerHTML = showAbilities
    displayStats.innerHTML = showStats
  })
}) 


