function booleanToString(bool) {
  if (bool === true) {
    return 'true';
  }
  if (bool === false) {
    return 'false';
  }
  return null;
}
module.exports = booleanToString;
