const formatName = (date) => {
  var cleanName = date;
  cleanName = cleanName.replace(/#/g, " ");
  cleanName = cleanName.replace(/-/g, " ");
  cleanName = cleanName.toUpperCase();
  return cleanName;
}

export default formatName;
