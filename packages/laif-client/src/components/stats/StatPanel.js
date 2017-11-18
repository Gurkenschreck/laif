import React, { Component } from 'react';

class StatPanel extends Component {
    render() {
        return (
            <div>
                Stat panel. Shows the current species stats.
                <p>General</p>
                <ul>
                    <li>Name</li>
                    <li>Population</li>
                    <li>Organism type</li>
                    <li>Mutation point</li>
                    <li>Score</li>
                </ul>
                <p>Individual stats</p>
                <ul>
                    <li>Toughness</li>
                    <li>Attack</li>
                    <li>Defense</li>
                    <li>Agility</li>
                    <li>Size</li>
                </ul>
            </div>
        );
    }
}

export default StatPanel;