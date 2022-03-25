"use strict";

var gamesContainer = document.querySelector(".results"); // const  url = "https://free-to-play-games-database.p.rapidapi.com/api/games/?rapidapi-key=e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5";
// const  url = "https://rawg-video-games-database.p.rapidapi.com/games/?rapidapi-key=7892c1736b184f4489e3262b28587ce6";

var url = "https://mmo-games.p.rapidapi.com/games?sort-by=popularity";
var corsFix = "https://noroffcors.herokuapp.com/";
var corsUrl = corsFix + url;

function fetchGames() {
  var response, json, game, i;
  return regeneratorRuntime.async(function fetchGames$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(corsUrl, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "mmo-games.p.rapidapi.com",
              "x-rapidapi-key": "e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5"
            }
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          json = _context.sent;
          console.log(json);
          gamesContainer.innerHTML = "";
          game = json;
          i = 0;

        case 11:
          if (!(i < game.length)) {
            _context.next = 18;
            break;
          }

          if (!(i === 9)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("break", 18);

        case 14:
          gamesContainer.innerHTML += "<a href=\"details.html?id=".concat(game[i].id, "\" class=\"card\">\n\t\t\t\t\t\t\t\t\t\t \t<div class=\"grid-container\">\n\t\t\t\t\t\t\t\t\t\t\t \t<img class=\"game-thumb\" src=\"").concat(game[i].thumbnail, "\"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"game-details\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"game-title\">").concat(game[i].title, "</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"game-info\">").concat(game[i].genre, "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"game-info\">").concat(game[i].platform, "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"card-get-btn\">Get</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"game-price\">$25</span></p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>");

        case 15:
          i++;
          _context.next = 11;
          break;

        case 18:
          ;
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          gamesContainer.innerHTML = message("error", "Something went wrong!", _context.t0);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 21]]);
}

fetchGames();