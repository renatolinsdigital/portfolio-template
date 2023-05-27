const templateInjector = async () => {
  const placeHolders = document.querySelectorAll('[data-template]');

  for (const placeHolder of placeHolders) {
    const templateName = placeHolder.dataset.template;
    const templatePath = `../templates/${templateName}.html`;
    const templateHtml = await fetch(templatePath).then(response =>
      response.text()
    );

    if (placeHolder.parentNode) {
      const templateDoc = new DOMParser().parseFromString(
        templateHtml,
        'text/html'
      );
      const template = templateDoc.querySelector('template');
      const templateContent = template.content.cloneNode(true);
      const childClasses = placeHolder.dataset.childClasses;

      if (childClasses) {
        templateContent.firstElementChild.classList.add(
          ...childClasses.split(' ')
        );
      }

      placeHolder.replaceWith(templateContent);
    }
  }
};

export default templateInjector;
