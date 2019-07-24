import axios from 'axios';
// const axios = require('axios');

  async function getTemplates(){
  //send API request to pull file with templates list
    return await axios.get('https://jsonplaceholder.typicode.com/photos');
};


function findTemplate(templateNames, title) {
  let filteredTemplate = templateNames.filter(
    template => template.title === title
  );
  if (filteredTemplate.length >= 1) {
    return filteredTemplate[0];
  } else {
    throw ('Template was not found: ', title);
  }
}

export { getTemplates, findTemplate };
