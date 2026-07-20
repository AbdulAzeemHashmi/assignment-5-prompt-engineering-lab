# Mission 4: Refactoring Prompt

## 1. Messy Code (Initial State)
```javascript
function analyzeText(str) {
  if (str === null || str === undefined) {
    return { w: 0, c: 0, cNoSp: 0, mostF: '' };
  }
  var a = str;
  var b = 0;
  var c = 0;
  var d = 0;
  
  for (var i = 0; i < a.length; i++) {
    c++;
  }
  
  for (var j = 0; j < a.length; j++) {
    if (a[j] !== ' ' && a[j] !== '\t' && a[j] !== '\n' && a[j] !== '\r') {
      d++;
    }
  }

  var wList = [];
  var tempWord = '';
  for (var k = 0; k < a.length; k++) {
    var char = a[k];
    if (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
      if (tempWord !== '') {
        wList.push(tempWord);
        tempWord = '';
      }
    } else {
      tempWord += char;
    }
  }
  if (tempWord !== '') {
    wList.push(tempWord);
  }
  b = wList.length;

  var freqMap = {};
  for (var m = 0; m < wList.length; m++) {
    var wordLower = wList[m].toLowerCase();
    if (freqMap[wordLower] === undefined) {
      freqMap[wordLower] = 1;
    } else {
      freqMap[wordLower] = freqMap[wordLower] + 1;
    }
  }

  var maxCount = 0;
  var mostFreqWord = '';
  for (var key in freqMap) {
    if (freqMap[key] > maxCount) {
      maxCount = freqMap[key];
      mostFreqWord = key;
    }
  }

  return {
    w: b,
    c: c,
    cNoSp: d,
    mostF: mostFreqWord
  };
}
```

---

## 2. Refactoring Prompt
**Prompt:**
```text
Role: Act as a senior JavaScript mentor.
Task: Refactor this messy JavaScript code without changing its functionality or adding new features.
Context: This code is used in a text analysis widget on a dashboard.
Constraints: 
1. Plain JavaScript only, no external libraries.
2. Reusable code.
3. Keep the exact same input parameters and return object structure ({ w, c, cNoSp, mostF }).
4. Clean, readable structure using modern JavaScript (let/const, map/reduce or array methods, clean helper functions if necessary).
5. Improve variable naming to be descriptive.
Output Format: Code first, then explanation of refactoring changes.
Edge Cases: Keep the existing behavior on null/undefined input.
```

---

## 3. AI Refactored Code & Improvements
The AI refactored code (implemented in `src/textAnalyzer.js`) made the following key improvements:

1. **Variables & Casing**: Replaced cryptographic, single-character variables (`a`, `b`, `c`, `d`) with semantic, self-documenting ones (`cleanText`, `totalChars`, `charsNoSpaces`, `wordCount`).
2. **Modern ES6 Syntax**: Migrated from outdated `var` declarations to `const` and `let` scope bindings. Used `for...of` loop to count frequencies.
3. **Loop Consolidation & Helper Functions**:
   - Replaced multiple custom loops mapping character spaces with native JS string utilities (e.g. `.replace(/\s/g, '').length`).
   - Consolidated word splitting logic into a single regex-based `.split(/\s+/)` statement, eliminating custom loop-based space parsers.
4. **Behavior Integrity**: Preserved output interface keys `{ w, c, cNoSp, mostF }` exactly so all existing callers are unaffected.
