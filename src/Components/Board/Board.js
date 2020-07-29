import React, { Component } from 'react';
import BoardTile from '../BoardTile/BoardTile';
import './Board.scss';

export default class Board extends Component {

    renderSquare(i){
        let winning = false;
        for (var k = 0; k < this.props.winningSquares.length; k++) {
            if (this.props.winningSquares[k] === i) {
                winning = true;
            }
        }
        let content = this.props.squares[i];
        
        if (winning) {
            content = "!" + this.props.squares[i] + "!";
        } else {
            content = this.props.squares[i];
        }
        return <BoardTile value={content} onClick={()=>this.props.onClick(i)} />
    }
    render() {
        return (
            <div className = "container d-flex flex-column">
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                
            </div>
        )
    }
}