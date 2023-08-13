const interpolate = (template, object) => {
  return template.replace(
    /\$\{(\w+)\}/g,
    (match, variable) => object[variable] || match
  );
};

export default interpolate;
