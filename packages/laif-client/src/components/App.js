import React, { Component } from 'react';
import { Mosaic } from 'react-mosaic-component';
import StatPanel from './stats/StatPanel';
import ActionPanel from './actions/ActionPanel';
import MutationPanel from './mutations/MutationPanel';
import DomePanel from './dome/DomePanel';
import './App.css';
require('react-mosaic-component/react-mosaic-component.css');

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  a: <StatPanel/>,
  b: <ActionPanel/>,
  c: <MutationPanel/>,
  d: <DomePanel/>,
};

const initialValue = {
  direction: 'row',
  first: {
    direction: 'column',
    first: {
    direction: 'row',
      first: 'a',
      second: 'b'
    },
    second: 'c'
  },
  second: 'd'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <div className="App__title">Welcome to Laif</div>
        </header>

        <Mosaic
          renderTile={ id => ELEMENT_MAP[id] }
          initialValue={initialValue} />
      </div>
    );
  }
}

export default App;
