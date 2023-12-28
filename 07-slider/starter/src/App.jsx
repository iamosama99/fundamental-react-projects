import { useState } from 'react';
import {list, shortList, longList} from './data'
import Carousel from './Carousel';

const App = () => {

  return (
    <main>
      <h2>Slider Starter</h2>
      <Carousel/>
    </main>
  );
};
export default App;
