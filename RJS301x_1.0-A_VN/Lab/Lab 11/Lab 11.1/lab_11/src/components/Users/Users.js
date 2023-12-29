import { Component } from "react";
import styles from './Users.module.css'
import User from "./User/User";
import Button from "../Button/Button";

class Users extends Component {

    constructor() {
        super();
        this.state = {
            isDisplay: true,
        }
    }

    renderUser(users) {
        return users.map((user) => {
            return <User key={user.id} name={user.name} />
        })

    }

    componentDidUpdate() {
        if (this.props.filteredUsers.length === 0) {
            throw new Error('Something went wrong!')
        }
    }

    showNHideHandler() {
        this.setState({ isDisplay: !this.state.isDisplay })
    }

    render() {
        return <div className={`${styles['users']}`}>
            <div>
                {
                    this.state.isDisplay ? <Button onClick={this.showNHideHandler.bind(this)}>Hide Users</Button>
                        : <Button onClick={this.showNHideHandler.bind(this)}>Show Users</Button>
                }
            </div>
            <ul className={this.state.isDisplay ? '' : `${styles['hidden']}`}>
                {this.renderUser(this.props.filteredUsers)}
            </ul>
        </div>
    }
}

export default Users;