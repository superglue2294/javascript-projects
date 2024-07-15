const whoWon = require("../RPS.js");

describe("RPG", function() {

    test("should expect the game to be tied if both players play rock", function() {
        let result = whoWon("paper", "paper");
        expect(result).toEqual("TIE!");
    })

    test("should expect the game to be tied if both players play paper", function() {
        let result = whoWon("scissors", "scissors");
        expect(result).toEqual("TIE!");
    })

    test("should expect the game to be tied if both players play scissors", function() {
        let result = whoWon("rock", "rock");
        expect(result).toEqual("TIE!");
    })

    test("should expect player 2 paper to beat player 1 rock", function() {
        let result = whoWon("rock", "paper");
        expect(result).toEqual("Player 2 wins!");
    })

    test("should expect player 2 scissors to beat player 1 paper", function() {
        let result = whoWon("paper", "scissors");
        expect(result).toEqual("Player 2 wins!");
    })

    test("should expect player 2 rock to beat player 1 scissors", function() {
        let result = whoWon("scissors", "rock");
        expect(result).toEqual("Player 2 wins!");
    })

    test("should expect player 1 paper to beat player 2 rock", function() {
        let result = whoWon("paper", "rock");
        expect(result).toEqual("Player 1 wins!");
    })

    test("should expect player 1 scissors to beat player 2 paper", function() {
        let result = whoWon("scissors", "paper");
        expect(result).toEqual("Player 1 wins!");
    })

    test("should expect player 1 rock to beat player 2 scissors", function() {
        let result = whoWon("rock", "scissors");
        expect(result).toEqual("Player 1 wins!");
    })

    test("should return invalid if player 1 does not play rock paper or scissors", function() {
        let result = whoWon("dock", "rock");
        expect(result).toEqual("Invalid play.");
    })

    test("should return invalid if player 2 does not player rock paper or scissors", function() {
        let result = whoWon("rock", "dock");
        expect(result).toEqual("Invalid play.");
    })
    
})