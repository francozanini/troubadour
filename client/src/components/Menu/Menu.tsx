import { Divider, List, ListItem } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';
import React from 'react';
import { MenuModel } from '../../models/MenuModel';
import Playlist from '../../models/Playlist';
import { css } from '@emotion/css';

export function Menu() {
  const menuItems: MenuModel[] = [MenuModel.home(), MenuModel.search(), MenuModel.library()];
  const playlists: Playlist[] = [
    Playlist.named('happiness of sadness | POST-PUNK/LOFI/DREAMPOP/COLDWAVE/DARKWAVE'),
    Playlist.named('INDIE SLEAZY'),
    Playlist.named('HYPERPOP'),
  ];

  return (
    <>
      <List spacing={15}>
        {menuItems.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </List>
      <Divider orientation="horizontal" />
      <List spacing={10}>
        {playlists.map((playlist) => (
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
    </>
  );
}
