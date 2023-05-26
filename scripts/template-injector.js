const templateInjector = async () => {
  const placeHolders = document.querySelectorAll('[data-template]');

  for (const placeHolder of placeHolders) {
    const templateName = placeHolder.getAttribute('data-template');
    const templatePath = `../templates/${templateName}.html`;
    const templateHtml = await fetch(templatePath).then(data => data.text());

    if (placeHolder.parentNode) {
      const parser = new DOMParser();
      const templateDoc = parser.parseFromString(templateHtml, 'text/html');
      const template = templateDoc.querySelector('template');
      const templateContent = template.content.cloneNode(true);
      // const childClass = placeHolder.getAttribute('data-child-class');
      placeHolder.parentNode.replaceChild(templateContent, placeHolder);
    }
  }
};

export default templateInjector;
