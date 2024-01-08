import { useState } from "react";
import Form from "./Form";
import {nanoid} from "nanoid";
import Items from "./Items";
import {toast, ToastContainer} from "react-toastify"

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const getLocalStorage = () => {
   let list = localStorage.getItem('list');
   if(list){
    list = JSON.parse(list);
   }else{
    list = []
   }
   return list;
}

const App = () => {

  const [items, setItems] = useState(getLocalStorage());


  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed: false
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  }
  
  const removeItem = (id) => {
    const newItems = items.filter((item)=> item.id !== id)
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item removed from the list");
  }

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if(item.id === id){
        const newItem = {...item, completed:!item.completed}
        return newItem;
      }
      return item;
    })
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item completed");
  }

  return <section className="section-center">
    <ToastContainer position="top-center"/>
    <Form addItem={addItem}/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
  </section>;
};

export default App;
