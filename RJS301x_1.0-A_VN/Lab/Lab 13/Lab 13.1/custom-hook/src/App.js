
import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/NewTask/TaskForm';
import TaskItem from './components/Tasks/TaskItem/TaskItem';
import Tasks from './components/Tasks/Tasks';
import Section from './components/UI/Section/Section';
import useHttp from './hook/use-http';
import Loading from './components/UI/Loading/Loading';

const URL_API = 'https://movie-7d02e-default-rtdb.firebaseio.com/task.json';

function App() {

  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTask } = useHttp();

  const renderTask = (tasks) => {
    return tasks.map((task) => {
      return <TaskItem key={task.id} task={task} />
    });
  }

  useEffect(() => {
    const transformTask = (data) => {
      let taskList = [];
      for (const key in data) {
        const task = {
          id: key,
          name: data[key].name
        }
        taskList.push(task);
      }
      setTasks(taskList);
    }
    fetchTask({
      url: URL_API
    }, transformTask);
  }, [fetchTask])

  // useEffect(() => {

  // }, [tasks]);

  // fetch('https://movie-7d02e-default-rtdb.firebaseio.com/task.json', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: "Taks 02"
  //   }),
  // }).then((response) => {
  //   const data = response.json();
  //   return data
  // }).then((data) => {
  //   console.log(data.name)
  // }).catch((error) => {
  //   console.log(error)
  // })



  return (
    <div className="App">
      <Section>
        <TaskForm setTasks={setTasks} tasks={tasks}>
          <button type='submit'>Add Task</button>
        </TaskForm>
      </Section>
      <Section>
        <Tasks>
          {isLoading && !error ? 'loading...'
            : !isLoading && !error ? renderTask(tasks)
              : <p>{error}</p>}
          {/* {error && !error ? 'loading...' : renderTask(tasks)} */}
        </Tasks>
      </Section>
      {/* <Loading /> */}
    </div>
  );
}

export default App;
