//render props - technique for sharing  code between react components using prop whose values is a function
import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default User
