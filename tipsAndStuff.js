/* 
  the http object recives more methods like
  OPTIONAL  - used for spin loaders an stuff
 */ 

http.onprogress = function() {
  // while de st is 3 the loader will appear
}

// we can listen to the changes of state of the request
// old way onreadystatechange
// checks for status and readyState
/*
  http.onreadystatechange = function() {
     const readyState = ( http.readyState == 4 ), // check for readyState 4
           okStatus   = ( http.status == 200 ); // check for status 200
  }
*/
/*
  READY STATES
  
  0 - req not initialized
  1 - req has been set up / server connection established
  2 - req has been sent / req received
  3 - req is in process / processing
  4 - req is complete, now we can use the data 
  
  HTTP STATUSES
  
  200 - Ok
  403 - forbidden
  404 - nnot found
*/

// (async () => {
//   let pokeObject = await pokeFetch('ditto');
//   console.log(pokeObject) 
// })(); // funcion autoinvocable