import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import eventData from '../data/fixtures'
import Event from './Event'



const EvModal = () => {

  const eventMapped = eventData.map(event => (
    <Event key={event.id} event={event} />
    ))

    
    return (
    
      <div>
        {eventMapped}
      </div>
  )
}

export default EvModal