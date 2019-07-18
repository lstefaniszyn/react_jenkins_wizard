import React from 'react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { StepFour } from './StepFour';

const templateData = {};
const getTemplateData = () => {
  console.log('FirstName:', templateData);
  return templateData;
};
  
  
//   templateData[key] = value;
//   console.log('FirstName:', templateData);

const steps = [
  { name: 'Choose template', component: <StepOne getTemplateData={getTemplateData} /> },
  { name: 'Email', component: <StepTwo /> },
  { name: 'Password', component: <StepThree /> },
  { name: 'Agreement', component: <StepFour /> }
];

export { steps };
