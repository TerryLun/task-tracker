import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 4th at 1:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "All Hands Meeting",
      day: "Feb 14th at 2:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Buy weed",
      day: "Feb 25th at 3:00pm",
      reminder: false,
    },
  ]);
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //toggle form
  const toggleForm = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        ontoggleForm={toggleForm}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
    </div>
  );
};

export default App;
