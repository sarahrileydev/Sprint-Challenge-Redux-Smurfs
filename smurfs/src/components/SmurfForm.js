import React, { Component } from 'react';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    submitChange = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
    }

    handleInputChange = e => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='smurf-form-wrapper'>
            <form onSubmit={this.submitChange}>
            <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name="name"
            />
            <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            name='age'
            />
            <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            name='height'
            />
            <button type='submit'>Add Smurf</button>
            </form>
            </div>
        )
    }
}

export default SmurfForm;