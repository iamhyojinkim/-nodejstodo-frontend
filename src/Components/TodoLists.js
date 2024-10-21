import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../utils/api";
import Upside from "./TodoLists_upside";
import TodoFunctions from "./Context/TodoFunctions";

export default function TodoLists() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const [todoId, setTodoId] = useState(null);
  const { state } = useLocation();
  const user = state?.user;

  const getTask = async () => {
    const response = await api.get("/task");
    setTodos(response.data.data);
  };

  const addTodo = async () => {
    if (todo.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    const response = await api.post("/task", {
      task: todo,
      isComplete: false,
    });
    setTodo("");
    await getTask();
    console.log("add", response);
  };

  const deleteTodo = async (id) => {
    const response = await api.delete(`/task/${id}`);
    console.log(response);
    await getTask();
  };

  const startEditing = (id, currentTask) => {
    setTodoId(id);
    setEditText(currentTask);
    setIsEditing(true);
  };

  const updateTodo = async (id) => {
    if (editText.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    const response = await api.put(`/task/${id}`, {
      task: editText,
    });
    console.log(response);
    setIsEditing(false);
    setTodoId(null);
    await getTask();
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <Upside state={{ state }} user={user} />

      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6">
          Todo List
        </h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="What do you need to do?"
            className="flex-1 p-4 border border-gray-600 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <TodoFunctions
          todos={todos}
          isEditing={isEditing}
          todoId={todoId}
          editText={editText}
          setEditText={setEditText}
          updateTodo={updateTodo}
          startEditing={startEditing}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}
