import React from 'react';
import { Menu } from '../Menu/Menu';
import { css } from '@emotion/css';

export function Sidenav() {
  return (
    <nav
      className={css`
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 12%;
        max-width: 20%;
        height: 100vw;
        background-color: black;
      `}
    >
      <Menu />
    </nav>
  );
}
