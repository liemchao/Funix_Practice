import React, { Component } from 'react';
import styles from './UserFinder.module.css'
import UsersContext from '../../../store/user-context/user-context';
import Users from '../Users';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

class UserFinder extends Component {

    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: '',
            initUsers: [],
        }
    }

    componentDidMount() {
        this.setState({
            initUsers: this.context.users,
            filteredUsers: this.context.users
        });
    }

    componentDidUpdate(preProps, preSate, snapShot) {
        if (this.state.searchTerm !== preSate.searchTerm) {
            this.setState(() => {
                const filteredUsers = this.state.initUsers.filter((user) => {
                    return user.name.trim().toUpperCase().includes(this.state.searchTerm.trim().toUpperCase());
                })
                return { filteredUsers: filteredUsers }
            })
        }
    }

    searchUserHandler(e) {
        this.setState({ searchTerm: e.target.value })
    }

    render() {

        return (
            <>
                <div className={`${styles['finder']}`}>
                    <input onChange={this.searchUserHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users filteredUsers={this.state.filteredUsers} />
                </ErrorBoundary>
            </>

        )
    }
}

export default UserFinder;