import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const ListItem = ({ item, editItem, deleteItem, toggleDone, variant }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedValue, setEditedValue] = useState('')

  return (
    <ListGroup.Item
      variant={variant}
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >
      {isEditing ?
        <Form.Control
          type="text"
          value={editedValue}
          onChange={({ target }) => setEditedValue(target.value)}
        />
        : <span>{item.content}</span>
      }
      {isEditing ? (
        <Button
          onClick={() => {
            editItem(item.id, editedValue)
            setIsEditing(false)
            setEditedValue('')
          }}
        >
          Save
        </Button>
      ) : (
        <span>
          <Button
            style={{ marginRight: "10px" }}
            variant="light"
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </Button>
          <Button
            variant="light" 
            style={{ marginRight: "10px" }}
            onClick={() => {
              setIsEditing(true)
              setEditedValue(item.content)
            }}
          >
            Edit
          </Button>
          <Button 
            variant="light"
            onClick={() => toggleDone(item.id, !item.is_done)}
          >
            {item.is_done ? "Undo" : "Done"}
          </Button>
        </span>
      )}
    </ListGroup.Item>
  )
}

export default ListItem;