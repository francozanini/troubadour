import { List, ListItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@chakra-ui/react';
import React from 'react';

export function Sidenav() {
  return (
    <nav className="sidenav">
      <List spacing={15}>
        <ListItem>
          <FontAwesomeIcon className="margin-right" icon={faHome} /> <strong>Home</strong>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon className="margin-right" icon={faSearch} /> <strong>Search</strong>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon className="margin-right" icon={faBook} /> <strong>Your Library</strong>
        </ListItem>
      </List>
      <Divider orientation="horizontal" />
      <List spacing={15}>
        <ListItem>
          <FontAwesomeIcon className="margin-right" icon={faHome} /> <strong>Home</strong>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon className="margin-right" icon={faSearch} /> <strong>Search</strong>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon className="margin-right" icon={faBook} /> <strong>Your Library</strong>
        </ListItem>
      </List>
    </nav>
  );
}
