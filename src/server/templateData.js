import { axios } from 'axios';
// const axios = require('axios');

const templateData = async () => {
  //send API request to pull file with templates list
  try {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
  } catch (error) {
    console.error(error);
  }
};

// const templateData = () => {
//   //send API request to pull file with templates list

//   return {
//     templates: [
//       { name: 'Java_Maven', url_link: 'http://java_maven.zip' },
//       { name: 'Java_Maven', url_link: 'http://NEW_java_maven.zip' },
//       {
//         name: 'JavaScript_NodeJs',
//         url_link: 'http://javascript_nodejs.zip'
//       },
//       { name: 'DotNet', url_link: 'http://dotnet.zip' }
//     ]
//   };
// };

function findTemplate(name) {
  let filteredTemplate = templateData().templates.filter(
    template => template.name === name
  );
  if (filteredTemplate.length >= 1) {
    return filteredTemplate[0];
  } else {
    throw ('Template was not found: ', name);
  }
}

// function getTemplates() {
//   return templateData().templates;
// }

const tempTemplateData = async () => {
  let templateData = await templateData();
  if (templateData.data.message) {
    console.log(
      `Got ${Object.entries(templateData.data.message).length} breeds`
    );
  }
  return templateData.data.message;
};

function getTemplates() {
  let templateData = tempTemplateData();
  console.log('let templateData: ', templateData);
  return templateData;
}

// const getBreeds = async () => {
//   try {
//     return await axios.get('https://dog.ceo/api/breeds/list/all')
//   } catch (error) {
//     console.error(error)
//   }
// }

// const countBreeds = async () => {
//   const breeds = await getBreeds()

//   if (breeds.data.message) {
//     console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
//   }
// }

// countBreeds()

export { getTemplates, findTemplate };
