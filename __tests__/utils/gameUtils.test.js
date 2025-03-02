const { getGamesByGenre, getTopRatedGames, getGameDetailsById, selectRandomGameId, getHiddenGems } = require("../../utils/gameUtils");
const { VideoGames } = require("../../utils/data"); // Assuming you have your data exported

describe('Game Utility Functions', () => {
    describe('getGamesByGenre', () => {
        it('should return games of the specified genre', () => {
            const actionGames = getGamesByGenre('Action', 5);
            expect(actionGames.length).toBeGreaterThan(0); // Check that we got some games
            actionGames.forEach(game => {
                expect(game.genre).toBe('Action'); // Ensure they are all Action games
            });
        });

        it('should return an empty array if no games of that genre exist', () => {
            const nonExistentGenreGames = getGamesByGenre('Non-Existent Genre', 5);
            expect(nonExistentGenreGames).toEqual([]);
        });
    });

    describe('getTopRatedGames', () => {
        it('should return top-rated games sorted by rating', () => {
            const topRatedGames = getTopRatedGames(5);
            expect(topRatedGames.length).toBe(5); // Assuming there are at least 5 games
            expect(topRatedGames[0].averageRating).toBeGreaterThan(topRatedGames[1].averageRating);
        });
    });

    describe('getGameDetailsById', () => {
        it('should return the correct game details for a valid ID', () => {
            const gameDetails = getGameDetailsById(1); // Assuming ID 1 exists
            expect(gameDetails.title).toBe('The Legend of Zelda: Breath of the Wild'); // Change this according to your data
        });

        it('should return null for an invalid ID', () => {
            const gameDetails = getGameDetailsById(999); // ID that does not exist
            expect(gameDetails).toBeNull();
        });
    });

    describe('selectRandomGameId', () => {
        it('should return a valid game object', () => {
            const randomGame = selectRandomGameId();
            const foundGame = VideoGames.find(game => game.title === randomGame.title);
            expect(foundGame).toBeDefined(); // Check that the random game exists in your data
        });
    });

    describe('getHiddenGems', () => {
        it('should return games with high ratings and fewer reviews', () => {
            const hiddenGems = getHiddenGems(1000); // Adjust criteria as needed
            hiddenGems.forEach(game => {
                expect(game.averageRating).toBeGreaterThan(8); // Change criteria based on your project
                expect(game.numberOfReviews).toBeLessThan(1000); // Ensure review count meets hidden gem criteria
            });
        });
    });
});