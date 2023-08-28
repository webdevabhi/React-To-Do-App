import { useState } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const AddItem = ({ addItem }) => {
  const [userInput, setUserInput] = useState("")

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="add item . . . "
        size="lg"
        value={userInput}
        onChange={({ target }) => setUserInput(target.value)}
        aria-label="add something"
        aria-describedby="basic-addon2"
      />
      <InputGroup>
        <Button
          variant="dark"
          className="mt-2"
          onClick={() => {
            addItem(userInput)
            setUserInput("")
          }}
        >
          ADD
        </Button>
      </InputGroup>
    </InputGroup>
  )
}

export default AddItem
