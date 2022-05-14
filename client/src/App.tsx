import React from 'react';
import './App.css';
import './Sidenav.css';
import { Sidenav } from './Sidenav';

class Playlist {
  private title: string;

  public static named(title: string): Playlist {
    return new Playlist(title);
  }

  constructor(title: string) {
    this.title = title;
  }
}

function App() {
  Playlist.named('happiness of sadness | POST-PUNK/LOFI/DREAMPOP/COLDWAVE/DARKWAVE');
  Playlist.named('INDIE SLEAZY');
  Playlist.named('HYPERPOP');
  return <Sidenav />;
}

export default App;
