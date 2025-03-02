/**
 * NOTE: This data is not strictly necessary for the assignment, 
 * but was generated by ChatGPT and included because it will **likely** be helpful.
 * Feel free to modify, ignore or expand it as needed.
 */

const Genres = {
    ACTION: "Action",
    ADVENTURE: "Adventure",
    RPG: "Role-Playing Game",
    FPS: "First-Person Shooter",
    STRATEGY: "Strategy",
    SPORTS: "Sports",
    HORROR: "Horror",
    SIMULATION: "Simulation",
    PUZZLE: "Puzzle",
    RACING: "Racing"
};

const VideoGames = [
    { title: "The Legend of Zelda: Breath of the Wild", description: "An open-world action-adventure game set in Hyrule.", developer: "Nintendo", releaseYear: 2017, genre: Genres.ADVENTURE, averageRating: 9.8, numberOfReviews: 12000, released: true },
    { title: "The Witcher 3: Wild Hunt", description: "A sprawling RPG filled with monsters, magic, and rich storytelling.", developer: "CD Projekt Red", releaseYear: 2015, genre: Genres.RPG, averageRating: 9.7, numberOfReviews: 15000, released: true },
    { title: "Half-Life 2", description: "A groundbreaking first-person shooter with physics-based gameplay.", developer: "Valve", releaseYear: 2004, genre: Genres.FPS, averageRating: 9.6, numberOfReviews: 10000, released: true },
    { title: "Dark Souls III", description: "A brutally challenging RPG with rich lore and deep combat.", developer: "FromSoftware", releaseYear: 2016, genre: Genres.RPG, averageRating: 9.4, numberOfReviews: 8500, released: true },
    { title: "Minecraft", description: "A sandbox game where you can build and explore infinite worlds.", developer: "Mojang", releaseYear: 2011, genre: Genres.SIMULATION, averageRating: 9.5, numberOfReviews: 20000, released: true },
    { title: "Celeste", description: "A heartfelt platformer about climbing a mountain while overcoming personal struggles.", developer: "Maddy Makes Games", releaseYear: 2018, genre: Genres.ADVENTURE, averageRating: 9.5, numberOfReviews: 800, released: true },
    { title: "Hollow Knight", description: "A hand-drawn Metroidvania with deep exploration and tight combat.", developer: "Team Cherry", releaseYear: 2017, genre: Genres.ADVENTURE, averageRating: 9.5, numberOfReviews: 7500, released: true },
    { title: "Katana ZERO", description: "A stylish neo-noir action-platformer with fast-paced combat.", developer: "Askiisoft", releaseYear: 2019, genre: Genres.ACTION, averageRating: 9.0, numberOfReviews: 600, released: true },
    { title: "Outer Wilds", description: "A mystery exploration game set in a solar system trapped in a time loop.", developer: "Mobius Digital", releaseYear: 2019, genre: Genres.ADVENTURE, averageRating: 9.3, numberOfReviews: 900, released: true },
    { title: "Disco Elysium", description: "A narrative-driven RPG where you play as a detective with unique skill-based dialogue.", developer: "ZA/UM", releaseYear: 2019, genre: Genres.RPG, averageRating: 9.6, numberOfReviews: 950, released: true },
    { title: "Starfield", description: "A space exploration RPG from the creators of Fallout and Skyrim.", developer: "Bethesda Game Studios", releaseYear: 2023, genre: Genres.RPG, averageRating: null, numberOfReviews: 0, released: false },
    { title: "Hollow Knight: Silksong", description: "A sequel to the acclaimed indie Metroidvania, Hollow Knight.", developer: "Team Cherry", releaseYear: 2024, genre: Genres.ADVENTURE, averageRating: null, numberOfReviews: 0, released: false },
    { title: "Red Dead Redemption 2", description: "An open-world western action-adventure game.", developer: "Rockstar Games", releaseYear: 2018, genre: Genres.ACTION, averageRating: 9.7, numberOfReviews: 14000, released: true },
    { title: "DOOM Eternal", description: "A fast-paced first-person shooter that rewards aggressive gameplay.", developer: "id Software", releaseYear: 2020, genre: Genres.FPS, averageRating: 9.2, numberOfReviews: 175000, released: true },
    { title: "Sid Meier's Civilization VI", description: "A turn-based strategy game where you build and expand an empire.", developer: "Firaxis Games", releaseYear: 2016, genre: Genres.STRATEGY, averageRating: 9.0, numberOfReviews: 4000, released: true },
    { title: "Bloodborne", description: "A gothic horror action RPG with intense combat and a rich world.", developer: "FromSoftware", releaseYear: 2015, genre: Genres.RPG, averageRating: 9.6, numberOfReviews: 9000, released: true },
    { title: "Super Mario Odyssey", description: "A globe-trotting 3D platformer featuring Mario and his hat companion, Cappy.", developer: "Nintendo", releaseYear: 2017, genre: Genres.ADVENTURE, averageRating: 9.7, numberOfReviews: 11000, released: true },
    { title: "Cyberpunk 2077", description: "A futuristic RPG set in a cyberpunk city with branching stories.", developer: "CD Projekt Red", releaseYear: 2020, genre: Genres.RPG, averageRating: 8.9, numberOfReviews: 727000, released: true },
    { title: "God of War (2018)", description: "A third-person action-adventure featuring Kratos and his son, Atreus.", developer: "Santa Monica Studio", releaseYear: 2018, genre: Genres.ACTION, averageRating: 9.8, numberOfReviews: 12000, released: true },
    { title: "The Elder Scrolls V: Skyrim", description: "A vast open-world RPG filled with quests, dragons, and adventure.", developer: "Bethesda Game Studios", releaseYear: 2011, genre: Genres.RPG, averageRating: 9.6, numberOfReviews: 16000, released: true },
    { title: "Persona 5 Royal", description: "A stylish turn-based RPG about high school students fighting injustice.", developer: "Atlus", releaseYear: 2020, genre: Genres.RPG, averageRating: 9.7, numberOfReviews: 8000, released: true },
    { title: "FIFA 23", description: "The latest iteration of the FIFA soccer series.", developer: "EA Sports", releaseYear: 2022, genre: Genres.SPORTS, averageRating: 8.1, numberOfReviews: 3000, released: true },
    { title: "Forza Horizon 5", description: "An open-world racing game set in Mexico.", developer: "Playground Games", releaseYear: 2021, genre: Genres.RACING, averageRating: 9.4, numberOfReviews: 5000, released: true },
    { title: "Resident Evil 4 (Remake)", description: "A modern reimagining of the classic survival horror game.", developer: "Capcom", releaseYear: 2023, genre: Genres.HORROR, averageRating: 9.5, numberOfReviews: 7000, released: true },
    { title: "The Forgotten City", description: "A time-loop mystery adventure set in an ancient Roman city.", developer: "Modern Storyteller", releaseYear: 2021, genre: Genres.ADVENTURE, averageRating: 9.0, numberOfReviews: 700, released: true },
    { title: "Return of the Obra Dinn", description: "A detective puzzle game where you solve the fate of a lost ship's crew.", developer: "Lucas Pope", releaseYear: 2018, genre: Genres.PUZZLE, averageRating: 9.2, numberOfReviews: 500, released: true },
    { title: "Slay the Spire", description: "A deck-building rogue-like where you fight through floors of enemies using strategic card combos.", developer: "MegaCrit", releaseYear: 2019, genre: Genres.STRATEGY, averageRating: 9.1, numberOfReviews: 850, released: true },
    { title: "Inscryption", description: "A unique blend of deck-building, escape room puzzles, and psychological horror.", developer: "Daniel Mullins Games", releaseYear: 2021, genre: Genres.PUZZLE, averageRating: 9.3, numberOfReviews: 950, released: true },
    { title: "Loop Hero", description: "A rogue-like where you shape the world around a looping hero's journey.", developer: "Four Quarters", releaseYear: 2021, genre: Genres.STRATEGY, averageRating: 9.0, numberOfReviews: 700, released: true },
    { title: "A Short Hike", description: "A relaxing exploration game where you hike up a mountain at your own pace.", developer: "Adam Robinson-Yu", releaseYear: 2019, genre: Genres.ADVENTURE, averageRating: 9.4, numberOfReviews: 500, released: true },
    { title: "Into the Breach", description: "A turn-based strategy game where you control mechs defending against alien threats.", developer: "Subset Games", releaseYear: 2018, genre: Genres.STRATEGY, averageRating: 9.3, numberOfReviews: 650, released: true },
    { title: "Bug Fables: The Everlasting Sapling", description: "A charming RPG inspired by classic Paper Mario games.", developer: "Moonsprout Games", releaseYear: 2019, genre: Genres.RPG, averageRating: 9.0, numberOfReviews: 750, released: true },
    { title: "Eastward", description: "A pixel-art adventure RPG featuring a world filled with puzzles and charm.", developer: "Pixpil", releaseYear: 2021, genre: Genres.RPG, averageRating: 9.1, numberOfReviews: 600, released: true },
];

const upcomingGames = [
    { title: "Doom The Dark Ages", description: "Doom The Dark Ages is a upcoming first person shooter, the eighth main entry in the franchise.", developer: "ID Software", releaseYear: 2025, genre: Genres.ACTION, averageRating: null, numberOfReviews: 0, released: false},
    { title: "Grand Theft Auto VI", description: "The next major entry in the Grand Theft Auto series.", developer: "Rockstar Games", releaseYear: 2025, genre: Genres.ACTION, averageRating: null, numberOfReviews: 0, released: false },
    { title: "Metroid Prime 4", description: "The next installment in the Metroid Prime series.", developer: "Nintendo", releaseYear: 2025, genre: Genres.ACTION, averageRating: null, numberOfReviews: 0, released: false },
    { title: "Assassins Creed Shadows", description: "Assassins Creeds next game in Japan during the time of ninjas", developer: "Ubisoft", releaseYear: 2025, genre: Genres.ACTION, averageRating: null, numberOfReviews: 0, released: false },
    { title: "Borderlands 4", description: "A next person shooter in the borderlands franchise.", developer: "Gearbox Software", releaseYear: 2025, genre: Genres.FPS, averageRating: null, numberOfReviews: 0, released: false },
];

const hiddenGems = [
    { title: "Slay The Princess", description: "A horror adventure game about slaying the princess.", developer: "Black Tabby Games", releaseYear: 2023, genre: Genres.ADVENTURE, averageRating: 9, numberOfReviews: 20000, released: true },
    { title: "Far: Changing Tides", description: "An adventure puzzle traveling in the sea.", developer: "Okomotive", releaseYear: 2022, genre: Genres.ADVENTURE, averageRating: 9, numberOfReviews: 4000, released: true },
    { title: "The Universim", description: "A god like city builder through the ages.", developer: "Crytivo", releaseYear: 2024, genre: Genres.SIMULATION, averageRating: 8, numberOfReviews: 8000, released: true },
    { title: "A little to the left", description :"A cozy relaxing puzzle game.", developer: "Max Inferno", releaseYear: 2022, genre: Genres.PUZZLE, averageRating: 9, numberOfReviews: 11000, released: true },
]

module.exports = { Genres, VideoGames, upcomingGames, hiddenGems };
