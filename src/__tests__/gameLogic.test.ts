import { expect } from 'chai';
import { TruddleGame } from '../gameLogic';

describe('Truddle Game Logic', () => {
    let game;

    beforeEach(() => {
        game = new TruddleGame();
    });

    it('should initialize with the correct values', () => {
        expect(game.currentPlayer).to.equal(1);
        expect(game.turns).to.equal(0);
    });

    it('should allow a player to make a move', () => {
        game.makeMove(1, 1);
        expect(game.board[1][1]).to.equal(1);
        expect(game.turns).to.equal(1);
    });

    it('should not allow a move in an occupied space', () => {
        game.makeMove(1, 1);
        expect(() => game.makeMove(1, 1)).to.throw('Space already occupied');
    });

    it('should switch players after a move', () => {
        game.makeMove(1, 1);
        expect(game.currentPlayer).to.equal(2);
        game.makeMove(0, 0);
        expect(game.currentPlayer).to.equal(1);
    });

    it('should declare a winner', () => {
        game.makeMove(0, 0);
        game.makeMove(1, 0);
        game.makeMove(0, 1);
        game.makeMove(1, 1);
        game.makeMove(0, 2);
        expect(game.checkWinner()).to.equal(1);
    });

    it('should declare no winner on a tie', () => {
        // Filling the board without a winner
        game.makeMove(0,0);
        game.makeMove(0,1);
        game.makeMove(0,2);
        game.makeMove(1,0);
        game.makeMove(1,1);
        game.makeMove(1,2);
        game.makeMove(2,0);
        game.makeMove(2,1);
        game.makeMove(2,2);
        expect(game.checkWinner()).to.be.null;
    });
});
