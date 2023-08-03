import React, { useMemo, useState } from 'react'
import { MapCircle } from '@/infrastructure/Google/circle/GoogleMapCircle'

interface Props {
  className?: string
  settings: google.maps.CircleOptions
  Map?: google.maps.Map
}

const serviceManager = new MapCircle()

const GoogleMapCircle = (props: Props): JSX.Element => {
  const [circle, setCircle] = useState<google.maps.Circle>()

  useMemo(() => {
    if (circle) {
      circle.setOptions(props.settings)
      return
    }
    if (!props.Map) return
    const service = serviceManager
      .setMap(props.Map)
      .setOptions(props.settings)
      .makeService()
    if (service === null) return
    setCircle(service)

    return service
  }, [circle, props.Map, props.settings])

  return <></>
}

export default GoogleMapCircle
