import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const url = 'http://localhost:3100/tasks';
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskList = await fetchTasks();
      setTasks(taskList);
    }
    getTasks();
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`${url}/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToChange = tasks.find(task => task.id === id);
    taskToChange.reminder = !taskToChange.reminder;
    const res = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(taskToChange)
    })
    setTasks(tasks.map(task => task.id === id ? taskToChange : task))
  }

  // Add new Task
  const addTask = async (task) => {
    const res = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    setTasks([data, ...tasks]);
  }

  return (
    <div className="container">
      <Router>
        <Header
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)} />
        <Route exact path="/" render={(props) => {
          return <>
            {showAddTask && <AddTask onAddTask={addTask} />}
            {tasks.length ?
              <Tasks tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder} /> :
              'No Task To Show'}
            <Footer />
          </>
        }} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
