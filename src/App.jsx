import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FilterOption from './components/FilterOption'
import FilterForm from './components/FilterForm'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Button from './components/Button'

function App() {

const filterItems = [
    {
      value: "all",
      label: "Tất cả"
    },
    {
      value: "completed",
      label: "Đã hoàn thành"
    },
    {
      value: "active",
      label: "Chưa hoàn thành"
    }
  ];
  
const [todos, setTodos]= useState([
  {
    id: 1,
    title: 'Todo 1',
    completed: true
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false
  }
])
const [selectedFilterOption, setSelectedFilterOption] = useState("all");

const onSubmit = (value) => {
  // Thêm mới 1 công việc
  setTodos((prew) => {
    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };
    return [...prew, newTodo];
  });
};

//thay đổi trạng thái xông việc
const onToggleStatus = (id) => {
  setTodos((prew) => {
    return prew.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  });
};

// xóa 1 công việc
const onRemove = (id) => {
 
  setTodos((prew) => {
    return prew.filter((todo) => todo.id !== id);
  });
};
// xóa tất cả công việc
const onRemoveAll = () => {
  setTodos((prew) => {
    return [];
  });
};
// lọc công việc
const filteredTodos =
selectedFilterOption === "all"
? todos
: selectedFilterOption === "completed"
? todos.filter((item) => item.completed)
: todos.filter((item) => !item.completed);

  return (
    <div className='App'>
      <h1>TodoApp cover</h1>
      <TodoForm onSubmit={onSubmit}/>
      <FilterForm 
       items={filterItems}
       value={selectedFilterOption}
       onChange={(value) => setSelectedFilterOption(value)}/> 
      <TodoList
         todos={filteredTodos}
         onToggleStatus={onToggleStatus}
        onRemove={onRemove}
         />
      <div className='footer'>
        <span>Tổng số công việc: {todos.length}</span>
        <Button 
          variant='danger'  
          onClick={()=> {
            onRemoveAll()
          } }> 
          Xóa tất cả</Button>
      </div>
    </div>
  )
}

export default App
