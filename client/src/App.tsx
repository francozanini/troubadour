import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidenav/Sidebar';
import { css } from '@emotion/css';
import { Player } from './components/Player/Player';

function App() {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 15% 85%;
        grid-template-rows: 90% 10%;
        grid-template-areas:
          'sidebar main'
          'bottom bottom';
        width: 100vw;
        height: 100vh;
      `}
    >
      <Sidebar />
      <main
        className={css`
          grid-area: main;
          background-color: blue;
        `}
      ></main>
      <div
        className={css`
          grid-area: bottom;
          background-color: black;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
        `}
      >
        <Player
          className={css`
            margin-top: 5vh;
          `}
        ></Player>
      </div>
    </div>
  );
}

export default App;
