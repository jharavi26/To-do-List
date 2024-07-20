import { useState } from "react";

function AddTodo({onNewItem}){
  const [todoName, setTodoName]=useState();
  const [dueDate, setDueDate]= useState();

  const handleNameChange = (event) =>{
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) =>{
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked =() =>{
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  };

    return(
    <Grid>
        <div className="box"><input type="text" placeholder='Enter todo here' value={todoName} onChange={handleNameChange}/></div>
        <div className="box"><input  type='date' value={dueDate} onChange={handleDateChange}  /> </div>
        <div className="box"><button className="dark-green-button" onClick={handleAddButtonClicked}> Add</button ></div>
      </Grid>
    );


}

function Grid({ children }) {
    return (
      <div className="grid">
        {children}
      </div>
    );
  }

export default AddTodo;