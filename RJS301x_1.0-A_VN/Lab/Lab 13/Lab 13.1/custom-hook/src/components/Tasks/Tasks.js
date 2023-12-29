import styles from './Tasks.module.css';

function Tasks(props) {
    return (
        <div className={`${styles['container']}`}>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export default Tasks;