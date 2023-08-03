import { useEffect, useState } from 'react'
import { GeocoderManager } from '@/infrastructure/Google/geocoder/GeocoderManager'

interface Props {
  map?: google.maps.Map
  onReady: (manager: GeocoderManager) => void
}

const GoogleMapGeocoder = (props: Props): JSX.Element => {
  const [service, setService] = useState<google.maps.Geocoder>()

  useEffect(() => {
    if (service) return
    if (!props.map) return

    const manager = new GeocoderManager()

    const s = manager.setMap(props.map).makeService()
    if (s === null) return
    window.Miraden.geocoder = manager

    props.onReady(manager)

    setService(s)
  }, [props, props.map, service])
  return <></>
}

export default GoogleMapGeocoder
