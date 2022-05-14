import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class Song {}

class Playlist {
  private songs: Song[] = [];

  private title: string;

  public static named(title: string): Playlist {
    return new Playlist(title);
  }

  constructor(title: string) {
    this.title = title;
  }
}

class MenuIcon {
  private readonly _name: string;

  private readonly _icon: IconName;

  constructor({ name, icon }: { name: string; icon: IconName }) {
    this._name = name;
    this._icon = icon;
  }

  get icon(): IconName {
    return this._icon;
  }

  get name(): string {
    return this._name;
  }

  public static home(): MenuIcon {
    return new MenuIcon({ name: 'home', icon: 'house' });
  }

  public static search(): MenuIcon {
    return new MenuIcon({ name: 'search', icon: 'magnifying-glass' });
  }

  public static library(): MenuIcon {
    return new MenuIcon({ name: 'Your library', icon: 'album-collection' });
  }

  capitalized(): string {
    return this.name[0].toUpperCase() + this.name.substring(1);
  }
}

function App() {
  const playlists: Playlist[] = [
    Playlist.named('happiness of sadness | POST-PUNK/LOFI/DREAMPOP/COLDWAVE/DARKWAVE'),
    Playlist.named('INDIE SLEAZY'),
    Playlist.named('HYPERPOP'),
  ];

  const menus: MenuIcon[] = [MenuIcon.home(), MenuIcon.search(), MenuIcon.library()];

  return (
    <nav style={{ display: 'flex', flexDirection: 'column' }}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li>
          <FontAwesomeIcon icon={faSearch} /> Search
        </li>
        <li>
          <FontAwesomeIcon icon={faBook} /> Your Library
        </li>
      </ul>
    </nav>
  );
}

export default App;
