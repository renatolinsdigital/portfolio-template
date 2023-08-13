const templateInjector = async () => {
  const placeHolders = document.querySelectorAll('[data-template]');

  for (const placeHolder of placeHolders) {
    const { template, type = 'shared', childClasses } = placeHolder.dataset;
    const templatePath = `../../templates/${type}/${template}.html`;

    try {
      const templateResponse = await fetch(templatePath);

      if (templateResponse.ok) {
        const templateHtml = await templateResponse.text();
        const templateDoc = new DOMParser().parseFromString(
          templateHtml,
          'text/html'
        );
        const templateContent = templateDoc
          .querySelector('template')
          .content.cloneNode(true);

        if (childClasses) {
          templateContent.firstElementChild.classList.add(
            ...childClasses.split(' ')
          );
        }

        placeHolder.replaceWith(templateContent);
      } else {
        placeHolder.replaceWith('Template not found');
      }
    } catch (err) {
      placeHolder.replaceWith('Template injection error');
      console.log(err);
    }
  }
};

export default templateInjector;
