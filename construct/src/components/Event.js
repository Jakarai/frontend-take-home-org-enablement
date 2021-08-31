import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import dateFormat from 'dateformat';


const Event = ({event}) => {
    const [open, setOpen] = React.useState(false)

    const { title, description, id, image_url, venue, event_start, event_end} = event
    // const month = event_start.getUTCMonth() +1;
    // const day = event_start.getUTCDate();
    // const year = event_start.getUTCFullYear(); 
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
    const d = new Date();
    {console.log(dateFormat(event_start))}
    return (
    <div>
     <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<button>
        <img src={event.image_url} className="image" alt="logo"/>
        <h3>{event.title}</h3>
        <h3>{dateFormat(event_start)}</h3>
        </button>
        }
    >
      <Modal.Header>{title} </Modal.Header>
      <Modal.Content image>
        <Image size="small" src={event.image_url} wrapped />
        <Modal.Description>
          <Header>Event Details</Header>
            <h2>Date & Time </h2>
          <p>
            {event.description}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
            
        </div>
    )
}

export default Event
