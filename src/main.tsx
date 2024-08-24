import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function Main() {
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  // const fetchTodos = async () => {
  //   const { data: items } = await client.models.Todo.list();
  //   setTodos(items);
  // };

  useEffect(() => {
    // fetchTodos();
    const sub = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        setTodos([...items]);
      },
      error: console.error,
      complete: () => {
        console.log("complete in client.models.Todo.observeQuery");
      },
    });
    return () => sub.unsubscribe();
  }, []);

  const createTodo = async () => {
    await client.models.Todo.create({
      content: `Hello ${new Date().toISOString()}`,
      isDone: false,
    });

    // fetchTodos();
  };

  return (
    <div>
      <button onClick={createTodo}>Add new todo</button>
      <ul>
        {todos.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
