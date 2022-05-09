const cutWord = (
  word: string,
  desiredLength: number = 25,
  replacer: string = '...'
) => {
  const newWord = word.slice(0, desiredLength) + replacer;
  if (newWord.length <= desiredLength) {
    return word;
  }

  return newWord;
};

export default cutWord;
