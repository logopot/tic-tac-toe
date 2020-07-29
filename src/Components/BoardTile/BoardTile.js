import React from 'react'
import './BoardTile.scss'

export default function Square(props) {
    return (
        <button className="square" data-pro = {props.value} onClick={props.onClick}>
            {props.value}
        </button>
    )
}