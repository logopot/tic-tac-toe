import React, { Component } from 'react'
import Board from '../Board/Board';
import './Game.scss';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);


        let status;
        let winningSquares;
        if (winner) {
            status = 'Winner is ' + winner[0];
            winningSquares = lines[winner[1]];
        } else {
            status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
            winningSquares = [];
        }


        return (
            <div className="d-flex justify-content-center pt-5">
                <div className="game-board">
                    <h2 className = "p-4">{status}</h2>
                    <Board squares = {current.squares} winningSquares = {winningSquares} onClick={(i) => this.handleClick(i)} squares={current.squares} />
                    <a className = "btn btn-game mt-5 py-3 px-5" href = "/">Start new game</a>
                </div>
            </div>
        )
    }
}

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function calculateWinner(squares) {
 
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return [squares[a], i];
        }
    }

    return null;
}