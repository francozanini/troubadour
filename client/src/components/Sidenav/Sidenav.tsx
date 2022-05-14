import React from 'react';
import { Menu } from '../Menu/Menu';
import { css } from '@emotion/css';
import { Divider } from '@chakra-ui/react';
import Playlist from '../../models/Playlist';
import { Playlists } from './Playlists';

export function Sidenav() {
  const playlists: Playlist[] = [
    Playlist.named('happiness of sadness | POST-PUNK/LOFI/DREAMPOP/COLDWAVE/DARKWAVE'),
    Playlist.named('INDIE SLEAZY'),
    Playlist.named('HYPERPOP'),
  ];

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
      <Divider />
      <Playlists playlists={playlists} />
    </nav>
  );
}
