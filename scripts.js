/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */



// This is an array of objects (Cards)
let pokemons = [{
  name: "Team Rocket's Mewtwo EX",
  type: "Psychic",
  cost: 58.36,
  url: "https://tcgplayer-cdn.tcgplayer.com/product/633040_in_1000x1000.jpg",
},{
  name:"Mega Charizard X EX",
  type: "Fire",
  cost: 44.71,
  url: "https://tcgplayer-cdn.tcgplayer.com/product/659612_in_1000x1000.jpg",

},{
  name: "Reshiram & Zekrom GX",
  type: "Fire & Lightning",
  cost: 78.75,
  url: "https://tcgplayer-cdn.tcgplayer.com/product/201205_in_1000x1000.jpg",
},{

  name: "Ninetales",
  type: "Fire",
  cost: 43.21,
  url: "https://tcgplayer-cdn.tcgplayer.com/product/509945_in_1000x1000.jpg",
},{
  name: "Charizard",
  type: "Fire & Flying",
  cost: 24.12,
  url: "https://tcgplayer-cdn.tcgplayer.com/product/284251_in_1000x1000.jpg",
},{
  name: "Moltres & Zapdos & Articuno GX",
  type: "Fire & Lightning & Ice",
  cost: 46.50,
  url: "https://tcgplayer-cdn.tcgplayer.com/product/197688_in_1000x1000.jpg",
},{
  name: "Arceus & Dialga & Palkia GX",
  type: "Normal & Dragon & Steel",
  cost: 28.21,
  url: "https://tcgplayer-cdn.tcgplayer.com/product/201204_in_1000x1000.jpg",
},{
  name: "Vulpix",
  type: "Fire",
  cost: 14.99,
  url: "https://tcgplayer-cdn.tcgplayer.com/product/654477_in_1000x1000.jpg",
}
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards(list = pokemons) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  
  for (let i = 0; i < list.length; i++) {
    
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    const cardInfo = nextCard.querySelector(".card-content"); // Get the content area of the card
    cardInfo.removeAttribute("id"); // Remove id to avoid duplicates    


    list.innerHTML =`
    <li>
    <strong>${list[i].name}</strong> <br>
    Type: ${list[i].type} <br> 
    Cost: $${list[i].cost}
    </li> `;
    
    
    editCardContent(nextCard, list[i].url); // Edit image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newImageURL) {
  card.style.display = "block";

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = " Pokemon Card Image";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("- html: ", card);
}

// This calls the addCards() function when the page is first loaded

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I wanna be the very best, like no one ever was!",
  );
}

function removeLastCard() {
  pokemons.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}


//Sorting pokemons by: Cost, Name

function sortCardByCost(){
    const value = this.value;
    
    if (value === "name-asc") {
      pokemons.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name A-Z
    } else if (value === "name-desc") { 
      pokemons.sort((a, b) => b.name.localeCompare(a.name)); // Sort by name Z-A  
    } else if (value === "cost-asc") {
      pokemons.sort((a, b) => a.cost - b.cost); // Sort by cost low to high 
    } else{
      pokemons.sort((a, b) => b.cost - a.cost); // Sort by cost high to low
    }

    showCards(); 
}


//Searching for pokemons by: Name, Type

function searchByName(name) {
  const searchResults = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
  //console.log(searchResults);
  showCards(searchResults);
}


document.addEventListener("DOMContentLoaded", () => {
  showCards();  
  
  document.getElementById("sort-select").addEventListener("change", sortCardByCost);
  
  document.getElementById("search-input").addEventListener("keydown", (event) =>{
    if (event.key === "Enter") {
      searchByName(event.target.value);
    }
  });

});
