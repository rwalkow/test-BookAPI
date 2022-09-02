module.exports = (fullName) => {
  if (fullName === '') return 'Error';
  if (typeof fullName !== 'string') return 'Error';
  const found = fullName.match(/ /g);
  if (!found) return 'Error';
  if (found.length > 1) return 'Error';
  const fullNameLower = fullName.toLowerCase();
  const [ firstName, lastName ] = fullNameLower.split(' ');
  if(!firstName || !lastName) return false;
  return `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;
};
