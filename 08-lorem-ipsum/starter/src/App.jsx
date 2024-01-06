import { useState } from "react";
import data from './data';


const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amout = parseInt(count);
    setText(data.slice(0, amout));
  }
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph:</label>
        <input 
          type='number'
          name="amount"
          id="amount"
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e)=>setCount(e.target.value)}
          />
          <button className="btn" type="submit">generate</button>
      </form>
      <section>
        {text.map((para) => {
          return(
            <p>
              {para}
            </p>
          )
        })}
      </section>
    </section>
  );
};
export default App;
