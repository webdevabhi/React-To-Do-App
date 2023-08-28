import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getAllToDOList, addList, updateList, deleteList } from "./API";
import AddItemComponent from "./Components/AddItem";
import ListComponent from "./Components/List";

function App() {
  const [listState, setListState] = useState([])

  useEffect(() => {
    const getList = async () => {
      const list = await getAllToDOList()
      if (list.length) setListState(list)
    }

    getList()
  }, []);

  const addItem = async (userInput) => {
    if (userInput !== "") {
      const response = await addList({
        content: userInput
      })

      if (response.status === 201) {
        const list = [...listState]
        list.push(response.data)
        setListState(list)
      }
    }
  }

  const deleteItem = async id => {
    const deletedItem = await deleteList(id);

    if (deletedItem.status === 200) {
      const list = [...listState];
      const updateList = list.filter((item) => item.id !== id);
      setListState(updateList);
    }
  }

  const editItem = async (id, value) => {
    if (value.trim() !== '') {
      const toDoList = [...listState];
      const idx = toDoList.findIndex(e => e.id === id)

      const updatedItem = await updateList(id, {
        content: value
      })

      if (updatedItem.status === 200) {
        let updatedTodos = [...listState];
        updatedTodos[idx].content = value;
        setListState(updatedTodos);
      }
    }
  }

  const toggleDone = async (id, isDone) => {
    const toDoList = [...listState];
    const idx = toDoList.findIndex(e => e.id === id)

    const response = await updateList(id, {
      is_done: isDone
    })

    if (response.status === 200) {
      toDoList[idx].is_done = response.data.is_done
      setListState(toDoList);
    }
  }

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        TODO LIST
      </Row>

      <hr />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <AddItemComponent addItem={addItem} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <ListComponent data={listState} deleteItem={deleteItem} editItem={editItem} toggleDone={toggleDone} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
