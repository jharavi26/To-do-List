import React, { useState } from 'react';
import './App.css';
import AppName from './Components/AppName';
import AddTodo from './Components/AddTodo';
import TodoItems from './Components/TodoItems.js';
import WelcomeMessage from './Components/WelcomeMessage.js';

function App() {


const [todoItems, setTodoItems]=useState([]);

  const handleNewItem = (itemName, itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems =[...todoItems, 
      {name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item)=> item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
   <center class="To-Do Container">
    <div className="App">
      <h1>to-do Application</h1>
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems
    todoItems={todoItems}
    onDeleteClick={handleDeleteItem}
    ></TodoItems>
    </div>
    </center>
    </>
);
}

export default App;
