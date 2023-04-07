const Icon = async ({ name }) => {
  const path = `../assets/${name}.svg`;
  const response = await fetch(path);
  const icon = await response.text();

  return `<i>${icon}</i>`;
};

export default Icon;
