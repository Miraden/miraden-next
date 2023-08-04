import { useEffect, useMemo, useState } from 'react'
import { GoogleAutoComplete } from '@/infrastructure/Google/places/GoogleAutoComplete'

interface Props {
  map?: google.maps.Map
  onReady?: (manage: GoogleAutoComplete) => void
}

const manager = new GoogleAutoComplete()

const GoogleMapAutoComplete = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<google.maps.places.AutocompleteService>()

  useEffect(() => {
    if (search) {
      return
    }
    if (!props.map) return
    const service = manager
      .setMap(props.map)
      .setOptions({ types: ['country'] })
      .makeService()
    if (service === null) return
    if (props.onReady) props.onReady(manager)
    setSearch(service)
  }, [props, search])

  return <></>
}

export function SearchLocation(
  q: string,
  service: google.maps.places.AutocompleteService | undefined,
  onResult: Function
) {
  if (!service) return
  const displaySuggestions = function (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) {
    if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
      return
    }

    onResult(predictions)
  }

  service.getQueryPredictions({ input: q }, displaySuggestions)
}

export default GoogleMapAutoComplete
