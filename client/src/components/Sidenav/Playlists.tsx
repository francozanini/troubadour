import Playlist from '../../models/Playlist';
import { List, ListItem } from '@chakra-ui/react';
import { css } from '@emotion/css';
import React from 'react';

export function Playlists(props: { playlists: Playlist[] }) {
  return (
    <List spacing={10}>
      {props.playlists.map((playlist) => (
        <ListItem
          key={playlist.title}
          className={css`
            font-size: 1vw;
            overflow: hidden;
          `}
        >
          {playlist.title}
        </ListItem>
      ))}
    </List>
  );
}
