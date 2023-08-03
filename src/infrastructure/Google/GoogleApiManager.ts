import { Loader } from '@googlemaps/js-api-loader'
import { GoogleApi } from '@/modules/Google/GoogleApi'

export class GoogleApiManager {
  private apiKey: string
  private loader: Loader
  private isLoaded: boolean

  constructor(apiKey: string) {
    this.isLoaded = false
    this.apiKey = apiKey
    this.loader = new Loader({ apiKey: this.apiKey })
  }

  public async import(lib: GoogleApi.Libraries): Promise<void> {
    await this.loader.importLibrary(lib).then(async r => {
      this.isLoaded = true
    })
  }
}
