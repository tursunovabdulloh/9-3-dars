import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface Todo {
  id: number;
  text: string;
  date: string;
}

function Todo() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // 1
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // 2
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    const date = new Date().toLocaleString();
    let NewTodo: Todo = {
      id: Date.now(),
      text: newTodo,
      date: date,
    };
    setTodos([...todos, NewTodo]);
    setNewTodo("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // console.log(todos);

  return (
    <div className="container ">
      <div className="flex items-center justify-center bg-white pt-20">
        <div className="  rounded-lg p-6 ">
          <h1 className="text-6xl font-bold text-center text-blue-600 mb-4">
            TODOS
          </h1>
          <form onSubmit={addTodo} className="flex items-center gap-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-[450px] h-[50px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a new task..."
            />
            <button
              type="submit"
              onClick={addTodo}
              className="bg-blue-500 w-18 h-12  text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add
            </button>
          </form>
          <div className="mt-6">
            <ul className="list-disc pl-6 space-y-4">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between bg-gray-100 rounded-lg shadow-md p-4 transition hover:shadow-lg"
                >
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-800">
                      {todo.text}
                    </span>
                    <span className="text-sm text-gray-500">{todo.date}</span>
                  </div>
                  <FaTrash
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
