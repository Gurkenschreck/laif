import React, { Component } from 'react';

class ActionPanel extends Component {
    render() {
        return (
            <div>
                The available actions and the swarm strategy to follow.
                <p>Strategies</p>
                <ul>
                    <li>Populate</li>
                    <li>Aggressive behaviour</li>
                    <li>Cautious behaviour</li>
                </ul>
                <p>Actions</p>
                <ul>
                    <li>Random Mutation (Cheaper)</li>
                    <li>Specialized Mutation</li>
                    <li>Remove Mutation</li>
                </ul>
            </div>
        );
    }
}

export default ActionPanel;