import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";
import Categories from "./Categories";

const allCategories = ['all',... new Set(menu.map((item) => item.category))];

const App = () => {
  
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(allCategories);
  const filterItems = (category) => {
    category === "all" ? setMenuItems(menu) :
    setMenuItems(menu.filter((item) => item.category === category));
  }
     
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={allCategories} filterItem={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
};
export default App;
