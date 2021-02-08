import logo from '../images/logo.svg';
import '../styles/App.css';
import UserList from "./UserList";
import TodoList from "./TodoList";

function App({task}) {
  return (
      <>
        <UserList task={task}/>
        <TodoList />
      </>
  );
}

export default App;
