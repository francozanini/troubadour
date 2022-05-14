import { MenuModel } from '../../models/MenuModel';
import { ListItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/css';
import React from 'react';

export function MenuItem({ icon, name }: MenuModel) {
  return (
    <ListItem>
      <FontAwesomeIcon
        className={css`
          margin-right: 10px;
        `}
        icon={icon}
      />{' '}
      <strong>{name}</strong>
    </ListItem>
  );
}
