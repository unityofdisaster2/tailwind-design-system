import { useState } from "react";
import Dropdown from "./components/Dropdown";

export default function App() {

  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  }

  const options = [
    {
      label:'Red',
      value:'red'
    },
    {
      label:'Green',
      value:'green'
    },
    {
      label:'Blue',
      value:'blue'
    }
  ]
  return <Dropdown selection={selection} onSelect={handleSelection} options={options} />
}
