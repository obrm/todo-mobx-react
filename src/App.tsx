import { observer, useLocalObservable } from 'mobx-react-lite';

import { TodoList, TodoInput } from './components';

import styles from './styles/App.module.css';

const App = () => {
  // Use of useLocalObservable instead of useState (for complex local state)
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    receiveData() {
      appUI.loading = false;
      appUI.todosVisible = !appUI.todosVisible;
    },
    // https://mobx.js.org/actions.html#asynchronous-actions
    async toggleTodoVisibility() {
      appUI.loading = true;

      await new Promise(resolve => setTimeout(() => resolve(void 0), 1000));

      appUI.receiveData();
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
