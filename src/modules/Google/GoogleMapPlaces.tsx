import { useEffect, useMemo, useState } from 'react'
import { GoogleApi } from '@/modules/Google/GoogleApi'
import { GooglePlacesService } from '@/infrastructure/Google/places/GooglePlacesService'
import PlacesSearchFields = GoogleApi.PlacesSearchFields
import PlacesService = google.maps.places.PlacesService

interface Props {
  className?: string
  map?: google.maps.Map
  settings?: google.maps.places.PlaceOptions
  fields?: PlacesSearchFields[]
}

const serviceManager = new GooglePlacesService()

const GoogleMapPlaces = (props: Props): JSX.Element => {
  const [places, setPlaces] = useState<PlacesService>()

  useEffect(() => {
    if (places) {
      return
    }

    if (!props.map) return
    const service = serviceManager
      .setMap(props.map)
      .setOptions(props.settings)
      .makeService()
    if (service === null) return
    setPlaces(service)
  }, [places, props])

  return <></>
}

export default GoogleMapPlaces
