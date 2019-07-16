import React from 'react';
import './App.css';
import { steps } from './components/steps';
import MultiStep from './components/MultiStep';

export function App({ initialData }) {
  return (
    <div className="container">
      <h1>Certified Continous Integration (CCI) wizard</h1>
      <div>
        <MultiStep showNavigation={true} steps={steps} />
      </div>
    </div>
  );
}

export default App;
