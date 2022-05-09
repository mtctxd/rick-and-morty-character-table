function capitalize(word: string) {
  if (!word) {
    return word
  };

  const firstLetter = word[0].toUpperCase();
  const rest = word.substr(1).toLowerCase();

  return firstLetter + rest;
}

export default capitalize;
