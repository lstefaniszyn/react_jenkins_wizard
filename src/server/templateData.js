import axios from 'axios';

async function getTemplates() {
  //send API request to pull file with templates list
  return await axios.get('https://jsonplaceholder.typicode.com/photos');
}

function findTemplate(templateNames, title) {
  if (!Array.isArray(templateNames)) {
    throw new Error('Unknown type');
  }

  if (typeof title !== 'string') {
    throw new Error('Unknown type');
  }

  let filteredTemplate = templateNames.filter(
    template => template.title === title
  );
  if (filteredTemplate.length >= 1) {
    return filteredTemplate[0];
  } else {
    throw new Error('Template was not found: ' + title);
  }
}

export { getTemplates, findTemplate };
