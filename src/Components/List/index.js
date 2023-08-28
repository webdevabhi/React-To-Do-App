import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import ListItem from "./item";

const List = ({ data, deleteItem, editItem, toggleDone }) => {
  const [toDoList, setTodDoList] = useState([])
  const [completedList, setCompletedList] = useState([])

  useEffect(() => {
    const filterCompletedItemsFromData = () => {
      const list = data.filter(e => e.is_done)
      setCompletedList(list)
    }

    const filterToDoListFromData = () => {
      const list = data.filter(e => !e.is_done)
      setTodDoList(list)
    }

    filterCompletedItemsFromData()
    filterToDoListFromData()
  }, [data]);

  return (
    <div style={{marginTop: "10%"}}>
      <div style={{marginBottom: "10%"}}>
        <h3>Todo List:</h3>
        <ListGroup>
          {toDoList.map((item, index) => {
            return (
              <div key={index} >
                <ListItem
                  item={item}
                  editItem={editItem}
                  deleteItem={deleteItem}
                  toggleDone={toggleDone}
                />
              </div>
            )
          })}
        </ListGroup>
      </div>

      <div>
        <h3>Completed List:</h3>
        <ListGroup>
          {completedList.map((item, index) => {
            return (
              <div key={index} >
                <ListItem
                  item={item}
                  editItem={editItem}
                  deleteItem={deleteItem}
                  toggleDone={toggleDone}
                  variant="dark"
                />
              </div>
            )
          })}
        </ListGroup>
      </div>
    </div>
  )
}

export default List
