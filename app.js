const container = document.querySelector('container');

fetch('https://pokeapi.co/api/v2/pokemon/charizard')
.then(response=>{
    if (response.ok){
    return response.json();
    }
})
.then(pokemon => {
    const chariZard = {
        ability : pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        move: pokemon.moves[4].move.name,
        image: pokemon.sprites.other['official-artwork']['front_default'],
        purchaseLink:'https://www.ebay.com/i/362448040271?chn=ps'
}

const charzardCard = makePokemonCard(chariZard);
container.appendchild(charzardCard);


})
.catch(error => {
    console.log(error);
})

function makePokemonCard(pokemon){
    // create a div element , add a class, add style X
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

        //create an image tag, add src, add class, add alt
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src',pokemon.image);
    image.setAttribute('alt', 'This is a pokemon');
        //append image to the card div
    card.appendChild(image);

        //create div, add class
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
            //Creat h5 element add a class, add text 
        const nameElement = document.createElement('h5');
        nameElement.classList.add('card-titile');
        nameElement.textContent = pokemon.name;
            //create p tag, add class, add text
        const heightWeight = document.createElement('p');
        heightWeight.classList.add('card-text');
        heightWeight.textContent = `Height: ${pokemon.height}, Weight:${pokemon.weight}`

        const move = document.createElement('p');
        move.classList.add('card-text');
        move.textContent = pokemon.move;

        const ability = document.createElement('p');
        ability.classList.add('card-text');
        ability.textContent = pokemon.ability;
        
            //creat a tag, add 2 class, add href, add text 
        const purchaseLink = document.createElement('a');
        purchaseLink.classList.add('btn', 'btn-primary');
        purchaseLink.setAttribute('href', 'pokemon.purchaseLink');
        purchaseLink.textContent = `Buy ${pokemon.name} card`
            //append to card-body div
            cardBody.appendChild(nameElement);
            cardBody.appendChild(heightWeight);
            cardBody.appendChild(move);
            cardBody.appendChild(ability);
            cardBody.appendChild(purchaseLink);
        //append card-body div to card
    card.appendChild(cardBody);
    //append card div to container div
    return card;

}

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */