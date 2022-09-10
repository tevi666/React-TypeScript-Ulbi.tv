import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './Components/UsersPage';
import TodosPage from './Components/TodosPage';
import { Link } from 'react-router-dom';
import UserItemPage from './Components/UserItemPage';
import TodoItemPage from './Components/TodoItemPage';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">
            Users
          </Link>
          <Link to="/todos">
            Todos
          </Link>
        </div>
        <Routes>
          <Route path='/users' element={<UsersPage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
          <Route path='/todos/:id' element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;