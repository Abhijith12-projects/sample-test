import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const changeTextHandler = (event) => {
    setText(event.target.value);
  };

  const addButtonHandler = () => {
    if (text.trim().length === 0) return;
    const curr = [...data, { id: text.length + 1, val: text }];
    setData(curr);
    setText("");
  };

  const xHandler = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input onChange={changeTextHandler} value={text} />
      <button onClick={addButtonHandler}>ADD</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.val}
            <button onClick={() => xHandler(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
