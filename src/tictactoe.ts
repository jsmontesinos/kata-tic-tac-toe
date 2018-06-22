export class Grid {
    
    constructor(private grid: string[][] ) {}

    isOver = () => this.playerWins('X') || this.playerWins('O') || this.gridIsFull();

    whoWins(): string {
        if (this.isOver()) {
            if (this.playerWins('X')) {
                return 'X';
            }
            else if (this.playerWins('O')) {
                return 'O';
            }
            else {
                return 'Nobody';
            }
        }
        else {
            return 'Game is not over';
        }
    }

    private playerWins(symbol: string): boolean {
        return this.rowHasSameSymbol(symbol) || 
                this.columnHasSameSymbol(symbol) || 
                this.diagonalHasSameSymbol(symbol);
    }

    rowHasSameSymbol = (symbol) => this.grid.some(row => row.every(cell => cell === symbol));

    columnHasSameSymbol = (symbol) => {
        for (let i = 0; i < 3; i++){
            if (this.grid[0][i] === symbol &&
                this.grid[0][i] === this.grid[1][i] && 
                this.grid[1][i] === this.grid[2][i]) {
                    return true;
            }
        }

        return false;
    };

    diagonalHasSameSymbol = (symbol) => {
        return (this.grid[0][0] === symbol &&
            this.grid[0][0] === this.grid[1][1] &&
            this.grid[1][1] === this.grid[2][2]) ||
            (this.grid[0][2] === symbol &&
            this.grid[0][2] === this.grid[1][1] &&
            this.grid[1][1] === this.grid[2][0]);
    };

    gridIsFull = () => {
        return this.grid.every(row => row.every(cell => cell !== ''));
    }
}