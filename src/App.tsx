import { TodoList, TodoInput } from './components';

import TodoStore from './stores/TodoStore';

const todos = new TodoStore();

const App = () => {
  return (
    <div className="app">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
