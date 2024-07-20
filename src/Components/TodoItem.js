function TodoItem({todoName,todoDate, onDeleteClick})
{
    return (
    <Grid>
        <div className="box">{todoName}</div>
        <div className="box">{todoDate}</div>
        <div className="box"><button className="dark-red-button" onClick={()=>onDeleteClick(todoName)}>Delete</button></div>
      </Grid>
    )
}

function Grid({ children }) {
    return (
      <div className="grid">
        {children}
      </div>
    );
  }
  

export default TodoItem;