// Strategy pattern for themes
export interface Theme {
  apply(): void;
}

export class LightTheme implements Theme {
  apply() {
    console.log("Light theme applied");
  }
}

export class DarkTheme implements Theme {
  apply() {
    console.log(" Dark theme applied");
  }
}

export class ThemeSwitcher {
  private theme: Theme;
  constructor(theme: Theme) {
    this.theme = theme;
  }

  setTheme(theme: Theme) {
    this.theme = theme;
  }

  applyTheme() {
    this.theme.apply();
  }
}
