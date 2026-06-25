import { useState, useEffect } from "react";
import Todo from './components/Todo';

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Runs whenever todoList changes
  useEffect(() => {
    console.log("Todo List Updated");
  }, [todoList]);

  // Add Todo
  function addTodo() {
    if (task.trim() === "") return;

    setTodoList([...todoList, task]);
    setTask("");
  }

  // Delete Todo
  function deleteTodo(index) {
    const newList = todoList.filter((item, i) => i !== index);
    setTodoList(newList);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-5">
          Todo App
        </h1>

        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter Todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 flex-1 rounded"
          />

          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <Todo
          todoList={todoList}
          deleteTodo={deleteTodo}
        />

      </div>
    </div>
  );
}

export default App;