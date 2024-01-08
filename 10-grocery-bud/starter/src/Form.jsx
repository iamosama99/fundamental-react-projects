import { useState } from "react"
import { toast } from "react-toastify";

const Form = ({addItem}) => {

    const [newItemName, setNewItemName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItemName){
            toast.error("please provide value")
            return;
        } 
        addItem(newItemName);
        setNewItemName('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <h4>Grocery bud</h4>
        <div className="form-control">
            <input 
            type="text" 
            onChange={(e)=>setNewItemName(e.target.value)}
            value={newItemName}
            className="form-input"
            />
            <button type="submit" className="btn">Add Item</button>
        </div>
    </form>
  )
}
export default Form