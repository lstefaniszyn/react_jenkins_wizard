import { template } from '@babel/core';

// const templateData = async() => {
//   //send API request to pull file with templates list
//   return await axios("http://google.com").data;

const templateData = () => {
  //send API request to pull file with templates list

  return {
    templates: [
      { name: 'Java_Maven', url_link: 'http://java_maven.zip' },
      { name: 'Java_Maven', url_link: 'http://NEW_java_maven.zip' },
      {
        name: 'JavaScript_NodeJs',
        url_link: 'http://javascript_nodejs.zip'
      },
      { name: 'DotNet', url_link: 'http://dotnet.zip' }
    ]
  };
};

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

function getTemplates() {
  return templateData().templates;
  // return templateData().templates.map(template => template);
}

export { getTemplates, findTemplate };
