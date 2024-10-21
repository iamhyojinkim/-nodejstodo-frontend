import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export default function TodoFunctions({
  todos,
  isEditing,
  editText,
  setEditText,
  todoId,
  updateTodo,
  startEditing,
  deleteTodo,
}) {
  return (
    <>
      <ul className="space-y-3 max-h-64 overflow-y-auto">
        {todos.map((item) => (
          <li
            key={item._id}
            className="flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow-md transition hover:shadow-lg"
          >
            {isEditing && todoId === item._id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg"
              />
            ) : (
              <span className="text-lg text-white">{item.task}</span>
            )}

            <div className="flex space-x-7">
              {isEditing && todoId === item._id ? (
                <button
                  className="text-green-500 hover:text-green-700"
                  onClick={() => updateTodo(item._id)}
                >
                  ✅
                </button>
              ) : (
                <button
                  onClick={() => startEditing(item._id, item.task)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaPencilAlt />
                </button>
              )}

              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteTodo(item._id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
