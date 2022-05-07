const cutWord = (
  word: string,
  replacer: string = '...',
  desiredLength: number = 25
) => {
  const newWord = word.slice(0, desiredLength) + replacer;
  if (newWord.length <= desiredLength) {
    return word;
  }

  return newWord;
};

export default cutWord;
