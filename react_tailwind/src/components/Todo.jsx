

function Todo({ todoList, deleteTodo }) {
  return (
    <div>

      {todoList.length === 0 ? (
        <p className="text-center text-gray-500">
          No Todos Available
        </p>
      ) : (
        todoList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-200 p-2 rounded mb-2"
          >
            <p>{item}</p>

            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default Todo;