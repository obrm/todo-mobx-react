import { observer } from 'mobx-react-lite';

import { useStore } from '../stores';
import { Todo } from "../stores/TodoStore.class";

import styles from './styles/TodoList.module.css';

interface Props {

}

const TodoList: React.FC<Props> = () => {
  const { todos } = useStore();

  const handleToggleTodo = (t: Todo) => () => {
    todos.toggle(t);
  };

  const handleRemoveTodo = (id: number) => () => {
    todos.remove(id);
  };

  return (
    <ul className={styles["todo-list"]}>
      {todos.list.map((t: Todo) => (
        <li key={t.id}>
          <label className={t.isDone ? styles.done : ''} htmlFor={String(t.id)}>
            {t.title}
          </label>

          <button
            className={[styles.remove,
            t.isDone ? styles.done : '']
              .join(' ')}
            onClick={handleRemoveTodo(t.id)}>Remove</button>

          <button onClick={handleToggleTodo(t)}>
            <input type="checkbox" id={String(t.id)} readOnly tabIndex={-1} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default observer(TodoList);