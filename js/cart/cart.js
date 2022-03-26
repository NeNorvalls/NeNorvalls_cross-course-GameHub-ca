const gamesContainer = document.querySelector(".results");

const url = "https://mmo-games.p.rapidapi.com/games";

const corsFix = "https://noroffcors.herokuapp.com/"

const corsUrl = corsFix + url;

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

			}

        } catch(error) {
            console.log(error);
            gamesContainer.innerHTML = message("error", "Something went wrong!", error);
        }
    }

function addToCart(trigger) {
    var emptyCart = cartWrapper.hasClasss("empty");
    // get localstorage cart product list
    getProductsFromLocalStorage();
    // update cart product list
    addProduct();
    // update number of items
    updateCartCount(emptyCart);
    // update total price
    updateCartTotal(trigger.date("price"), true);
    // show cart
    cartWrapper.removeClass("empty");
}

addToCart();

function addProduct() {

    productId = productId + 1;
let productTitle =  `${game[i].title}`;
let productPrice = `${game[i].price}`;
let productImage = `${game[i].thumbnail}`;
value = parseFloat(productPrice).toFixed(2);

var productAdded = $(`<li class="product"><div class="game-img"><a href="#0"><img src="`+ productImage + `" alt="Game Image")</a></div><div class="game-details"><h3><a href="#0">` + productTitle + `</a></h3><span class="price">` + productPrice + `</span><div class="cart-events"<a href="#0" class="delete-product">Delete</a><a class="delete-item">``<div class="quantity"><label for="game-product-` + productId + `">Qty</label><span class="select"><select id="game-product-` + productId + `" name="quantity"><option value="1">1</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>`);

cartList.append(productAdded);

let products = [{"productId" : productId + 1, productImage : productImage, title : productTitle}];

localStorage.setItem("products", JSON.stringify(products));

}

function getProductsFromLocalStorage() {
    const localGames = localStorage.getItem(products);
    if (localGames === null) {
        addProduct();
    } else {
        forEach(localGames, function(key, value) {
            cartList.appendChild($(`<li class="product"><div class="product-image"><a href="#0"><img src="` + image +`" alt="Game Image"></a></div><div class="product-details"><h3><a href="0">` + productTitle + `</a></h3><span class="price">`+ productPrice +`</span><div class="cart-events"><a href="#0" class="delete-item">Delete</a><a class="delete-item"><div class="quantity"><label for="game-product-` + value.productId + `">Qty</label><span class="select"><select id="game-product-` + value.productId + `"name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>`));
        });
    }
}

function removeProduct(productId){

    let storageProducts = JSON.parse(localStorage.getItem("products"));
    let products = storageProducts.filter(product => product.productId !== productId);
    localStorage.setItem("products", JSON.stringify(products));
}

removeProduct();