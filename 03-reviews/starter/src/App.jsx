import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const {id, name, job, text, image } = people[index];

  const prevPerson = () => {
    setIndex((currentIndex)=>{
      const newIndex = Math.abs(currentIndex - 1) % 4;
      return newIndex;
    })
  };
  const nextPerson = () => {
    setIndex((currentIndex)=>{
      const newIndex = (currentIndex + 1) % 4;
      return newIndex;
    })
  };

  const randomPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = Math.floor(Math.random() * 4);
      return newIndex;
    })
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className="autor">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-conta">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>Surprise me</button>
      </article>
    </main>
  );
};
export default App;
