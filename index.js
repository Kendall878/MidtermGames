const express = require("express");
const app = express();
const port = 3000;

//  Ensure correct import
const data = require("./utils/data");

const { Genres, VideoGames, upcomingGames, hiddenGems } = data;

app.use(express.static("public"));

app.get("/upcoming", (req, res) => {
    res.render("upcoming", { upcomingGames });
});

// Middleware to set EJS as the view engine
app.set("view engine", "ejs");

// Function to get x games by genre
function getGamesByGenre(genre, limit) {
    return VideoGames.filter((game) => game.genre === genre).slice(0, limit);
}

// Function to get the y top-rated games
function getTopRatedGames(limit) {
    return VideoGames.filter((game) => game.released) // Only released games
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice(0, limit);
}

// Function to get game details by title
function getGameDetails(title) {
    const allGames = [...VideoGames, ...upcomingGames];

    return allGames.find(game => 
        game.title.toLowerCase().trim() === title.toLowerCase().trim()
    ) || null;
}




// Function to select a random game
function getRandomGame() {
    const releasedGames = VideoGames.filter((game) => game.released);
    const randomIndex = Math.floor(Math.random() * releasedGames.length);
    return releasedGames[randomIndex];
}

// Function to get hidden gems
function getHiddenGems(reviewThreshold) {
    return VideoGames.filter(game => game.averageRating >= 8 && game.numberOfReviews < reviewThreshold);
}

//  Home Page Route
app.get("/", (req, res) => {
    // Combine all available games (both released and upcoming)
    const allGames = [...VideoGames, ...upcomingGames];

    // Shuffle and pick 9 random games
    const randomGames = allGames.sort(() => 0.5 - Math.random()).slice(0, 9);

    res.render("index", { randomGames });
});


//  Upcoming Games Route
app.get("/game/:title", (req, res) => {
    const gameTitle = decodeURIComponent(req.params.title); //  Convert title from URL
    console.log("DEBUG: Requested Game Title ->", gameTitle);

    const gameDetails = getGameDetails(gameTitle);
    console.log("DEBUG: Found Game ->", gameDetails);

    if (!gameDetails) {
        return res.status(404).send("Game not found"); //  Handle missing games
    }

    res.render("game", { game: gameDetails, VideoGames });
});


//  Top-Rated Games Route
app.get("/top-rated", (req, res) => {
    const topRatedGames = getTopRatedGames(15);
    res.render("top-rated", { games: topRatedGames });
});

//  Game Details Route
app.get("/game/:title", (req, res) => {
    const rawTitle = req.params.title; // Title from the URL
    const gameTitle = decodeURIComponent(rawTitle); // Convert back to normal text
    
    console.log("DEBUG: Raw Title from URL ->", rawTitle);
    console.log("DEBUG: Decoded Game Title ->", gameTitle);

    const gameDetails = getGameDetails(gameTitle);
    console.log("DEBUG: Found Game ->", gameDetails);

    if (!gameDetails) {
        return res.status(404).send("Game not found");
    }

    res.render("game", { game: gameDetails, VideoGames });
});


//  Random Game Route
app.get("/random", (req, res) => {
    const randomGame = getRandomGame();
    res.render("game", { game: randomGame });
});

//  Hidden Gems Route

app.get("/hidden-gems", (req, res) => {
    res.render("hidden-gems", { hiddenGems }); // Pass hiddenGems directly
});


//  Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
