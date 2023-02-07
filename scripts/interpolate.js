const interpolate = (template, object) => {
  return template.replace(/\$\{(\w+)\}/g, (match, variable) => {
    return object[variable] || match;
  });
}

export default interpolate;