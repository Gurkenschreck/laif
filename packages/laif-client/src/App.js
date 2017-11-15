import React, { Component } from 'react';
import './App.css';
import { Mosaic } from 'react-mosaic-component';
require('react-mosaic-component/react-mosaic-component.css');

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  a: <div>Stats</div>,
  b: <div>Mutations</div>,
  c: <div>Biome</div>,
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
          initialValue={{
            direction: 'row',
            first: {
              direction: 'column',
              first: 'a',
              second: 'b'
          },
            second: 'c'
          }} />
      </div>
    );
  }
}

export default App;
