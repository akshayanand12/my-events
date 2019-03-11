import React, { Component } from 'react';

class Event extends Component {
    static defaultProps = {
        event: { name: "test", location: ""}
    }

    render() {
        return (
            <div>
                {'Name: ' + this.props.event.name + ' ' + 'Location: ' + this.props.event.location }
            </div>
        )
    }
}

export default Event;