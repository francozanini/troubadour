import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidenav/Sidebar';
import { css } from '@emotion/css';

function App() {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 15% 85%;
        grid-template-rows: 88% 12%;
        grid-template-areas:
          'sidebar main'
          'sidebar player';
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
      <footer
        className={css`
          grid-area: player;
          background-color: red;
        `}
      ></footer>
    </div>
  );
}

export default App;
