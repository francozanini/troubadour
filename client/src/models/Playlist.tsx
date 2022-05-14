export default class Playlist {
  public readonly title: string;

  constructor(title: string) {
    this.title = title != '' ? title : 'no title';
  }

  public static named(title: string): Playlist {
    return new Playlist(title);
  }
}
