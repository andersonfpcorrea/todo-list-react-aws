import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import './App.css';
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from './graphql/mutations';
import { listTodos } from './graphql/queries';

const initialFormState = { name: '', description: '' };

function App({ signOut }) {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchTodo().catch((err) => console.error(err.message));
  }, []);

  async function fetchTodo() {
    const apiData = await API.graphql({
      query: listTodos,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    const todosFromAPI = apiData.data.listTodos.items;
    await Promise.all(
      todosFromAPI.map(async (note) => {
        if (note.image) {
          const image = await Storage.get(note.image);
          note.image = image;
        }
        return note;
      })
    );
    setTodos(apiData.data.listTodos.items);
  }

  async function createTodo() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createTodoMutation,
      variables: { input: formData },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setTodos([...todos, formData]);
    setFormData(initialFormState);
  }

  async function deleteTodo({ id }) {
    const newTodosArray = todos.filter((note) => note.id !== id);
    setTodos(newTodosArray);
    await API.graphql({
      query: deleteTodoMutation,
      variables: { input: { id } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
  }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchTodo();
  }

  return (
    <div className='App'>
      <h1>My Todos App</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder='Note name'
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder='Note description'
        value={formData.description}
      />
      <input type='file' onChange={onChange} />
      <button onClick={createTodo}>Create Todo</button>
      <div style={{ marginBottom: 30 }}>
        {todos.map((todo) => (
          <div key={todo.id || todo.name}>
            <h2>{todo.name}</h2>
            <p>{todo.description}</p>
            {todo.image && (
              <img src={todo.image} style={{ width: 400 }} alt={todo.name} />
            )}
            <button onClick={() => deleteTodo(todo)}>Delete todo</button>
          </div>
        ))}
      </div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App);
