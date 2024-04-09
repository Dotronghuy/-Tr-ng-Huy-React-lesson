import React, { Component } from 'react'

export default class Class_DoTrongHuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: 'DoTrongHuy',
            class: 'K22CNT1'
        }
    }
    users = {
        name: 'Đỗ Trọng Huy',
        age: 20
    }
// handle change
    handleChange = () => {
        this.setState({
            fullName: 'Nguyễn Văn Thạo'
        })
    }

  render() {
    return (
      <div>
        <h2> Class Component Demo</h2>
        {this.users.name} - {this.users.age}

        <hr />
        <h3> 
            info: {this.props.info}
        </h3>
        <h3> time: {this.props.time}</h3>
        <hr />
        <h3>Stae:
            fullName: {this.state.fullName};
            class: {this.state.class};

        </h3>
        <button onClick={this.handleChange}>Change Name</button>
      </div>
    )
  }
}

