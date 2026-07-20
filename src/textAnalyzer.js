/**
 * Analyzes a string for counts of words, characters, characters excluding spaces, and the most frequent word.
 * @param {string} text - The input string to analyze.
 * @returns {object} An object with counts and the most frequent word.
 */
function analyzeText(text) {
  if (text === null || text === undefined) {
    return { w: 0, c: 0, cNoSp: 0, mostF: '' };
  }

  const cleanText = String(text);
  const totalChars = cleanText.length;
  const charsNoSpaces = cleanText.replace(/\s/g, '').length;

  // Split into words using whitespace regex, filter out empty elements
  const words = cleanText.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Count frequencies
  const wordFrequencies = {};
  let maxFrequency = 0;
  let mostFrequentWord = '';

  for (const word of words) {
    const lowerWord = word.toLowerCase();
    wordFrequencies[lowerWord] = (wordFrequencies[lowerWord] || 0) + 1;

    if (wordFrequencies[lowerWord] > maxFrequency) {
      maxFrequency = wordFrequencies[lowerWord];
      mostFrequentWord = lowerWord;
    }
  }

  return {
    w: wordCount,
    c: totalChars,
    cNoSp: charsNoSpaces,
    mostF: mostFrequentWord
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = analyzeText;
}
