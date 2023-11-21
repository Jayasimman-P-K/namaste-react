import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

    }

    render() {
        const { name, location, contact } = this.props;
        const { count } = this.state;
        return (
            <div>
                <br />
                <h3>User from a Class Component</h3>
                <h3>Count = {count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }} >Increase</button>
                <button onClick={() => {
                    this.setState({
                        count: 0,
                    })
                }}>Reset</button>

                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default UserClass;