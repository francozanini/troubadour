import { faBook, faHome, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class MenuModel {
  public readonly name: string;

  public readonly icon: IconDefinition;

  constructor(name: string, icon: IconDefinition) {
    this.name = name
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(' ');
    this.icon = icon;
  }

  public static home(): MenuModel {
    return new MenuModel('home', faHome);
  }

  public static search(): MenuModel {
    return new MenuModel('search', faSearch);
  }

  public static library(): MenuModel {
    return new MenuModel('your library', faBook);
  }
}
