const formatName = (name) => {
  var cleanName = name;
  const firstLetter = cleanName.charAt(1).toUpperCase();
  cleanName = cleanName.replace(/--/g, " "); // we want to format the double -- first
  cleanName = cleanName.replace(/#/g, "");
  cleanName = cleanName.replace(/-/g, " ");
  cleanName = firstLetter + cleanName.slice(1);

  return cleanName;
}

export default formatName;
