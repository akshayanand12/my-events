import React, { Component } from 'react';
import Event from '../Event/Event'

class EventList extends Component {
    static defaultProps = {
        events : [{name:"event1", location:"location1"}]
    }

    render() {
        return (
            <div>
               {
                   this.props.events.map((e, index) => (
                        <Event event={e} key={index} />
                   ))
               }
            </div>
        )
    }
}

export default EventList;