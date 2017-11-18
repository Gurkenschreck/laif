import React, { Component } from 'react';
import { Mosaic } from 'react-mosaic-component';
import ActiveMutations from './ActiveMutations';
import MutationPreview from './MutationPreview';

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    a: <ActiveMutations/>,
    b: <MutationPreview/>,
};

const initialValue = {
    direction: 'row',
    first: 'a',
    second: 'b'
};

class MutationPanel extends Component {
    render() {
        return (
            <Mosaic
                renderTile={id => ELEMENT_MAP[id]}
                initialValue={initialValue} />
        );
    }
}

export default MutationPanel;