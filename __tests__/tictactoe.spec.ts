import {Grid} from '../src/tictactoe';

describe('Grid', () => {
    describe('isOver', () => {
    
        it('when gird is empty game is not over', () => {
            const grid = new Grid([
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ]);
            
            expect(grid.isOver()).toBe(false);
        });
        
        it('a game is not over when not all fields in a row are taken by a player', () => {
            const grid = new Grid([
                ['X', 'X', ''],
                ['O', 'O', ''],
                ['O', 'O', '']
            ]);

            expect(grid.isOver()).toBe(false);
        });

        it('when all cells in a row have O then game is over', () => {
            const grid = new Grid([
                ['X', 'X', ''],
                ['O', 'O', ''],
                ['O', 'O', 'O']
            ]);

            expect(grid.isOver()).toBe(true);
        });

        it('when all cells in a row have X then game is over', () => {
            const grid = new Grid([
                ['X', 'X', 'X'],
                ['O', 'O', ''],
                ['O', 'O', '']
            ]);
            
            expect(grid.isOver()).toBe(true);
        });

        it('when all cells in a column have X then game is over', () => {
            const grid = new Grid([
                ['X', '', ''],
                ['X', 'O', ''],
                ['X', '', 'O']
            ]);
            
            expect(grid.isOver()).toBe(true);
        });

        it('when all cells in a column have O then game is over', () => {
            const grid = new Grid([
                ['O', 'X', 'X'],
                ['O', '', ''],
                ['O', '', '']
            ]);
            
            expect(grid.isOver()).toBe(true);
        });

        it('when all cells in a asc diagonal have O then game is over', () => {
            const grid = new Grid([
                ['X', 'X', 'O'],
                ['', 'O', ''],
                ['O', '', '']
            ]);
            
            expect(grid.isOver()).toBe(true);
        });

        it('when all cells in a desc diagonal have O then game is over', () => {
            const grid = new Grid([
                ['O', 'X', ''],
                ['X', 'O', ''],
                ['X', '', 'O']
            ]);
            
            expect(grid.isOver()).toBe(true);
        });

        it('when all cells has been filled the game is over', () => {
            const grid = new Grid([
                ['O', 'X', 'O'],
                ['X', 'X', 'O'],
                ['X', 'O', 'X']
            ]);
            
            expect(grid.isOver()).toBe(true);
        });
    });

    describe('whoWins', () => {

        it('when all cells in a asc diagonal have O then the winer is O', () => {
            const grid = new Grid([
                ['X', 'X', 'O'],
                ['', 'O', ''],
                ['O', '', '']
            ]);
            
            expect(grid.whoWins()).toBe('O');
        });

        it('when all cells in a desc diagonal have O then the winer is X', () => {
            const grid = new Grid([
                ['X', '', 'O'],
                ['', 'X', ''],
                ['O', '', 'X']
            ]);
            
            expect(grid.whoWins()).toBe('X');
        });

        it('when all cells has been filled but nobody wins winer is nobody', () => {
            const grid = new Grid([
                ['O', 'X', 'O'],
                ['X', 'X', 'O'],
                ['X', 'O', 'X']
            ]);
            
            expect(grid.whoWins()).toBe('Nobody');
        });

        it('when game is not finished yet, winer returns Game is not over ', () => {
            const grid = new Grid([
                ['O', 'X', 'O'],
                ['X', 'X', ''],
                ['', 'O', 'X']
            ]);
            
            expect(grid.whoWins()).toBe('Game is not over');
        });

    });

});
