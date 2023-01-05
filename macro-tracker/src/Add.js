import{ useState } from "react";

const Create = () => {
  const [name, setName] = useState('');
  return(
    <div className= "Add">
        <h2>Add a food item</h2>
        <form>
            <label>Food name:</label>
            <input
            type= "text"
            required
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
        </form>
    </div>
);
  }

export default Add;
