enum LANG_STANDARDS {
  ISO_639_1 = 1,
}

enum DEFINED_LANG {
  English = 'en',
  Russian = 'ru',
}

const DEFAULT_LANG: string = DEFINED_LANG.Russian

class LangManager {
  constructor() {}

  public formatLanguage(val: string, iso: LANG_STANDARDS): string {
    let result: string = ''

    switch (iso) {
      case LANG_STANDARDS.ISO_639_1:
        result = this.formatISO6391(val)
    }

    return result
  }

  private formatISO6391(val: string): string {
    switch (val) {
      case DEFINED_LANG.Russian:
        return 'ru'
      case DEFINED_LANG.English:
        return 'en'
    }
    return ''
  }

  public getClientLang(): string {
    const html = document.getElementsByTagName('html')[0]
    const lang = html.getAttribute('lang')
    if (lang) {
      return lang
    }

    return DEFAULT_LANG
  }
}

export default LangManager
