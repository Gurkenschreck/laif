import React, { Component } from 'react';

class MutationPreview extends Component {
    render() {
        return (
            <div>
                Preview of a currently selected mutation to show more information
                about it.
                <ul>
                    <li>Image</li>
                    <li>Name</li>
                    <li>Effect</li>
                    <li>Description</li>
                </ul>
            </div>
        );
    }
}

export default MutationPreview;