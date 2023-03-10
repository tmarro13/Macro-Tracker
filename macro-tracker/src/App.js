import { useState } from "react";

const App = () => {
  const [name, setName] = useState(' ');
  return(
    <div className= "App">
        <h2>Add a food item</h2>
        <form>
            <label>Food name:</label>
            <input
            type= "text"
            required
            value = {name}
            onChange={(e) => setName(e.target.value)}
            />
            <label>Calories</label>
            <textarea
            required
            ></textarea>
            <label>Amount</label>
            <select>
                <option value= "1">1</option>
                <option value= "2">2</option>
                <option value= "3">3</option>
            </select>
            <button>Add Item</button>
            <p>{name}</p>
        </form>
    </div>
);
  }

export default App;
