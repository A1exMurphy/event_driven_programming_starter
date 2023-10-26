function onReady() {
  console.log('Yay!, onReady() got called when the page loaded.');
  // Wee can select things
  //document is the entirety of html file..
  let header = document.querySelector('h1')
  console.log(header)
  //manipulate the load of html with the javascript
  //->change the header text by adding a class.
  header.classList.add('pink-text')
  header.textContent = 'Hello.. Its me again.'
}

function deletePotato(event) {
  console.log(`spoiled potato`, event.target);

  event.target.remove();
}

function evaporateUnicorn(event) {
  console.log(`Where'd he go!?`, event.target);

  event.target.remove();
}

function onPotatoClick() {
  console.log( `you clicked on a potato, you absolute potato!`)

  let potatoFarm = document.getElementById("button");

  potatoFarm.innerHTML += `<p onclick="deletePotato(event)">🥔🥔🥔🥔🥔🥔🥔🥔</p>`
  
}

function onUnicornClick() {
  console.log(`Discovered a wild warrant officer!`);


  let unicornUncovered = document.getElementById(`button`);

  unicornUncovered.innerHTML += `<p onclick="evaporateUnicorn(event)">🦄</p>`
  //potatoFarm.innerHTML -= `<p>""</p>`
}

// Will call onReady() when the page loads.
onReady()