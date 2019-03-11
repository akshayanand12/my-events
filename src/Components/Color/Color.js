import React, { Component } from 'react'

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            instructors: [
                {
                    name: 'Jonh',
                    hobbies: ['writing', 'singing']
                },
                {
                    name: 'Matt',
                    hobbies: ['reading', 'jogging']
                },
                {
                    name: 'Thomas',
                    hobbies: ['dancing', 'playing guitar']
                }
            ] 
        }

        setTimeout(() => {
            this.setState({ color: 'blue'})
        }, 5000);
    }

    render() {
        const instructors = this.state.instructors.map((instructor) => (
            <div>
                { instructor.name }
                <ul>
                    {instructor.hobbies.join(',')}
                </ul>
            </div>
        ))
        return (
            <div>
                {instructors}
            </div>
        )
    }
}

export default Color;