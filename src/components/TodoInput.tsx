import { FormEvent } from 'react';

import { useStore } from '../stores';

import styles from './styles/TodoInput.module.css';

interface Props {

}

const TodoInput: React.FC<Props> = () => {
  const { todos } = useStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const value = String(formData.get("todo-input") || "");
    todos.add(value);

    formElement.reset();
  };

  return (
    <form className={styles['todo-input-group']} onSubmit={handleSubmit}>
      <input type="text" name="todo-input" placeholder="Add a todo..." />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;