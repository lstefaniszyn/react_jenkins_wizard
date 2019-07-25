import React from 'react';
import './App.css';
import { steps } from './components/steps';
import MultiStep from './components/MultiStep';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/custom.css';
import './styles/prog-tracker.css';

export function App({ initialData }) {
  
  
  return (
    <div className="container">
        <h1>Pipeline generator wizard</h1>
      <h4>Certified Contiuous Integration </h4>
      <div>
        <MultiStep showNavigation={true} steps={steps} />
      </div>
    </div>
  );
}

export default App;
