import axios from 'axios'
import React, { Component, connect } from 'react'
import UserList from './UserList.'


export default class UserDetailsClass extends Component {

    constructor(props) {
        super()
        this.state = {
            isLoading: false,
            userData: [],
            error: ''
        }
    }

    componentDidMount() {
        this.loadUsersDetails()
    }

    loadUsersDetails = () => {
        this.setState({ isLoading: true })
        axios.get('https://randomuser.me/api/?page=0&results=10')
            .then((response) => {
                this.setState({ userData: response.data.results, error: '' })
            })
            .catch((error) =>
                this.setState({ error: 'Error while loading please try again' }))

            .finally(() => {
                this.setState({ isLoading: false })
            })
    }

    render() {

        return (
            <div>
                {this.state.isLoading && <p>Loading.....</p>}
                {this.state.error && <p>{this.state.error}</p>} 
                <UserList data={this.state.userData} />
            </div>

        )
    }
}


