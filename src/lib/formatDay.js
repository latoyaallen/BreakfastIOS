const formatDay = (day) => {
  var cleanDay = day;
  cleanDay = cleanDay.replace(/#/g, " ");
  cleanDay = cleanDay.toUpperCase();
  return cleanDay;
}

export default formatDay;
