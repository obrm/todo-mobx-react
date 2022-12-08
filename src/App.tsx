import { TodoList, TodoInput } from './components';

const App = () => {
  return (
    <div className="app">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
