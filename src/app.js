import React from 'react';
import FlowerDetails from './components/FlowerDetails';
import Navbar from './components/Navbar';
import data from '../flower_fake_db'

const App = () => {
  const flowers = data.map(flower => {
    return(
      <FlowerDetails 
        key={flower.id}
        {...flower}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className='flower-list'>
        {flowers}
      </section>
    </div>
  );
};

export default App;