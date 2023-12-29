import { useCallback, useRef } from 'react';
import useHttp from '../../hook/use-http';
import styles from './TaskForm.module.css';
import Loading from '../UI/Loading/Loading';
const URL_API = 'https://movie-7d02e-default-rtdb.firebaseio.com/task.json';

function TaskForm(props) {
    const { isLoading, error, sendRequest: postTask } = useHttp();

    const taskInput = useRef();
    const transformTask = useCallback((data) => {
        if (!isLoading && !error) {
            const taskInputValue = taskInput.current.value;
            const task = {
                id: data.name,
                name: taskInputValue
            }

            props.setTasks([...props.tasks, task])
            taskInput.current.value = ''
        }
    }, [error, isLoading, props])

    const createTask = (e) => {

        e.preventDefault();
        const taskInputValue = taskInput.current.value;
        if (taskInputValue.trim()) {
            postTask({
                url: URL_API,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: taskInputValue,
                })
            }, transformTask)
        } else {
            alert('Please enter task');
        }
    }

    const onBlur = (e) => {
        console.log("blur")
    }

    const onFocus = (e) => {
        console.log("foucus") 
    }

    return (
        <form onSubmit={createTask} className={`${styles['form']}`}>
            <input placeholder='task' onFocus={onFocus} onBlur={onBlur} ref={taskInput} />
            {props.children}
            {isLoading ? <Loading /> : <>   </>}
        </form>
    );
}

export default TaskForm;