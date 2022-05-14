import React from 'react';
import { Menus } from '../Menu/Menus';
import { css } from '@emotion/css';
import { Divider } from '@chakra-ui/react';
import Playlist from '../../models/Playlist';
import { Playlists } from './Playlists';

export function Sidebar() {
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
        background-color: black;
        grid-area: sidebar;
      `}
    >
      <Menus />
      <Divider />
      <Playlists playlists={playlists} />
    </nav>
  );
}
