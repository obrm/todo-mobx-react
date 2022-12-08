import { observer, useLocalObservable } from 'mobx-react-lite';

import { TodoList, TodoInput } from './components';

import styles from './styles/App.module.css';

const App = () => {
  // Use of useLocalObservable instead of useState (for complex local state)
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    toggleTodoVisibility() {
      appUI.todosVisible = !appUI.todosVisible;
    },
  }));

  const handleClick = () => appUI.toggleTodoVisibility();

  return (
    <div className="app">
      <TodoInput />
      <div className={styles["todo-list-wrapper"]}>
        <h2 onClick={handleClick}>
          <span>{appUI.todosVisible ? "-" : "+"}</span>
          Todos</h2>
        {appUI.todosVisible && <TodoList />}
      </div>
    </div>
  );
};

export default observer(App);
