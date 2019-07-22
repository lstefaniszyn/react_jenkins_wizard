// const templateData = async() => {
//   //send API request to pull file with templates list
//   return await axios("http://google.com").data;

const templateData = () => {
  //send API request to pull file with templates list
  
  return {
    templates: [
      { name: 'Java_Maven', url_link: 'http://java_maven.zip' },
      {
        name: 'JavaScript_NodeJs',
        url_link: 'http://javascript_nodejs.zip'
      },
      { name: 'DotNet', url_link: 'http://dotnet.zip' }
    ]
  };
};

function getTemplates() {
  return templateData().templates.map(template => {
    return template;
  });
}

export { getTemplates };
