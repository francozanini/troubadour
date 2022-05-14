import { List } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';
import React from 'react';
import { MenuModel } from '../../models/MenuModel';

export function Menu() {
  const menuItems: MenuModel[] = [MenuModel.home(), MenuModel.search(), MenuModel.library()];

  return (
    <>
      <List spacing={15}>
        {menuItems.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </List>
    </>
  );
}
