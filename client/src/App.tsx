import React from 'react';
import './App.css';
import { Sidenav } from './components/Sidenav/Sidenav';

class Playlist {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  public static named(title: string): Playlist {
    return new Playlist(title);
  }
}

function App() {
  Playlist.named('happiness of sadness | POST-PUNK/LOFI/DREAMPOP/COLDWAVE/DARKWAVE');
  Playlist.named('INDIE SLEAZY');
  Playlist.named('HYPERPOP');
  return <Sidenav />;
}

export default App;
