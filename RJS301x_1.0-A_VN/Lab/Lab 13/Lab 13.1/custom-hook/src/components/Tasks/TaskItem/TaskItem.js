import styles from './TaskItem.module.css';

function TaskItem(props) {
    return (
        <li className={`${styles['task']}`}>
            {props.task.name}
        </li>
    );
}

export default TaskItem;