import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [taskList, setTask] = useState([]);
  const [newtask, setNewTask] = useState("");

  const Handletask = (e) => {
    setNewTask(e.target.value);
  };

  const AddTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newtask,
      completed: false,
    };
    setTask(task.taskName !== "" ? [...taskList, task] : taskList);
  };
  const DeleteTask = (id) => {
    setTask(taskList.filter((task) => task.id !== id));
  };
  const CompleteTask = (id) => {
    setTask(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={Handletask} />
        <button
          style={{
            backgroundColor: "black",
            color: "white",
          }}
          onClick={AddTask}
        >
          Add Task
        </button>
      </div>
      <div className="list">
        {taskList.map((tasks) => {
          return (
            <Task
              taskName={tasks.taskName}
              id={tasks.id}
              completed={tasks.completed}
              deleteTask={DeleteTask}
              completeTask={CompleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
/* {const [count, setCount] = useState(0);
  function Increase() {
    setCount(count + 1);
  }
  function Decrease() {
    setCount(count - 1);
  }
  function SetToZero() {
    setCount(0);
  }



<h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={SetToZero}>Set to zero</button>
      <button onClick={Decrease}>Decrease</button>}*/
