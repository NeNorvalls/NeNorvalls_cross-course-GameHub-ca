const gamesContainer = document.querySelector(".results");

const mmorpg = "https://mmo-games.p.rapidapi.com/games?category=mmorpg";


const corsFix = "https://noroffcors.herokuapp.com/"

const corsUrl = corsFix + mmorpg;

async function fetchGames() {

	try {
		const response = await fetch(corsUrl, {
			"method": "GET",
			"headers": {
			"x-rapidapi-host": "mmo-games.p.rapidapi.com",
			"x-rapidapi-key": "e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5"
		}});

		const json = await response.json();

		console.log(json);

		gamesContainer.innerHTML = "";

		const game = json;

		for (let i = 0; i < game.length; i++) {

			if (i === 18) {
				break;
			}
			gamesContainer.innerHTML += `<a href="details.html?id=${game[i].id}" class="card">
										 	<div class="grid-container">
											 	<img class="game-thumb" src="${game[i].thumbnail}"/>
											</div>
											<div class="game-details">
												<h4 class="game-title">${game[i].title}</h4>
												<p class="game-genre">${game[i].genre}</p>
												<button class="game-price-btn">FREE</button>
												<button class="game-cart-btn">Add to cart</button>
												
											</div>
										</a>`;
		};
	}
	catch(error) {
		console.log(error);
		gamesContainer.innerHTML = message("error", "Something went wrong!", error);
	}
}

fetchGames();

// const shooterContainer = document.querySelector(".shooter");

// const shooter = "https://mmo-games.p.rapidapi.com/games?category=shooter";

// const corsShooterFix = "https://noroffcors.herokuapp.com/"

// const corsShooterUrl = corsShooterFix + mmorpg;

// async function fetchGames() {

// 	try {
// 		const response = await fetch(corsShooterUrl, {
// 			"method": "GET",
// 			"headers": {
// 			"x-rapidapi-host": "mmo-games.p.rapidapi.com",
// 			"x-rapidapi-key": "e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5"
// 		}});

// 		const json = await response.json();

// 		console.log(json);

// 		gamesContainer.innerHTML = "";

// 		const game = json;

// 		for (let i = 0; i < game.length; i++) {

// 			if (i === 18) {
// 				break;
// 			}
// 			gamesContainer.innerHTML += `<a href="details.html?id=${game[i].id}" class="card">
// 										 	<div class="grid-container">
// 											 	<img class="game-thumb" src="${game[i].thumbnail}"/>
// 											</div>
// 											<div class="game-details">
// 												<h4 class="game-title">${game[i].title}</h4>
// 												<p class="game-genre">${game[i].genre}</p>
// 												<button class="game-price-btn">FREE</button>
// 											</div>
// 										</a>`;
// 		};
// 	}
// 	catch(error) {
// 		console.log(error);
// 		gamesContainer.innerHTML = message("error", "Something went wrong!", error);
// 	}
// }

// fetchGames();