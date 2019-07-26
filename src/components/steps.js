import React from 'react';
import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepFour } from './StepFour';

let templateData = {};

const updateTemplateData = (key, value) => {
  templateData[key] = value;
  console.log('FirstName:', templateData);
};


const steps = [
  {
    name: 'Choose template',
    component: (
      <StepOne
        updateTemplateData={updateTemplateData}
      />
    )
  },
  { name: 'Password', component: <StepThree /> },
  { name: 'Summary', component: <StepFour /> }
];

export { steps };
