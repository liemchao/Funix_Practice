import { Component } from 'react';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            errorInfo: null,
            hasError: false,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState(
            {
                error: error,
                errorInfo: errorInfo,
                hasError: true,
            }
        )
    }

    render() {
        if (this.state.hasError) {
            return <div className={`${styles['error']}`}>
                <h4>{this.state.error.toString().slice(7)}</h4>
            </div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;