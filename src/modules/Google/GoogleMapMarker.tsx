import { useMemo, useState } from 'react'
import { MapMarker } from '@/infrastructure/Google/marker/GoogleMapMarker'

interface Props {
  className?: string
  onDrag?: Function
  settings: google.maps.MarkerOptions
  Map?: google.maps.Map
}

const instance = new MapMarker()

const GoogleMapMarker = (props: Props): JSX.Element => {
  const [marker, setMarker] = useState<google.maps.Marker | null>(null)

  useMemo(() => {
    if (marker) {
      marker.setOptions(props.settings)
      return
    }
    if (!props.Map) return
    const service = instance
      .setMap(props.Map)
      .setOptions(props.settings)
      .makeService()
    if (service === null) return
    setMarker(service)
    service.addListener('dragend', (e: any) => {
      if (props.onDrag) {
        props.onDrag(service.getPosition())
      }
    })
    return service
  }, [marker, props])

  return <></>
}

export default GoogleMapMarker
