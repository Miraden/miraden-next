import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { GoogleApiManager } from '@/infrastructure/Google/GoogleApiManager'
import { GoogleApi } from '@/modules/Google/GoogleApi'

interface Props {
  className?: string
  onLoad?: (map: google.maps.Map) => void
  initialSettings: google.maps.MapOptions
}

const manager = new GoogleApiManager('AIzaSyD8hARNkg1cu_S69Wrir6-QcFwFqJrw17s')

const GoogleMap = (props: React.PropsWithChildren<Props>): JSX.Element => {
  const [isReady, setIsReady] = useState<boolean>(false)
  const mapNode = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isReady) {
      manager.import(GoogleApi.Libraries.Maps).then(lib => {
        const map: google.maps.Map = new google.maps.Map(
          // @ts-ignore
          mapNode.current,
          props.initialSettings
        )
        manager.import(GoogleApi.Libraries.Places).then(lib => {
          setIsReady(true)
          if (props.onLoad) props.onLoad(map)
          const event = new CustomEvent("GoogleMapInit", {detail: {map: map}})
          document.dispatchEvent(event)
        })
      })
    }
  }, [isReady, props])
  return (
    <StyledMap ref={mapNode} className={cn('GoogleMapInit', props.className)}>
      {props.children}
    </StyledMap>
  )
}

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`

export default GoogleMap
