import { useState } from "react";
import { TiDocumentDelete } from "react-icons/ti";

interface Todo {
  text: string;
}

function Todo() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = () => {};

  return (
    <div className="container ">
      <div className="flex items-center justify-center bg-white">
        <div className="  rounded-lg p-6 ">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            TODOS
          </h1>

          <form onSubmit={addTodo} className="flex items-center space-x-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a new task..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add
            </button>
          </form>

          <div className="mt-6">
            <ul className=" list-disc pl-6 space-y-2 ">
              {todos.map((todo, index) => (
                <div className="flex items-center gap-2">
                  <TiDocumentDelete className="bg-red-100 rounded-sm" />
                  <li
                    key={index}
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg text-gray-700 shadow-sm"
                  >
                    {todo.text}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
