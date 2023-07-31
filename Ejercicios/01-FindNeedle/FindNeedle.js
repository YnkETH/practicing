function FindNeedle(haystack, needle) {
  // Your code here:

  // Primera solucion
  /* let index = 0;
  let word = "";
  for (let i = 0; i < haystack.length; i++) {
    console.log(haystack[i]);
    // react-redux
    //       ^
    //       6
    for (let j = 0; j < needle.length; j++) {
      console.log(needle[j]);
      // redux
      // ^
      // 0
      if (needle[j] !== haystack[i + j]) {
        word = "";
        index = -1;
        break;
      }
      index = i;
      console.log(i);
      word += needle[j];
      console.log(word);
      if (word.length === needle.length) return index;
    }
  }
  return -1; */
  // Complejidad O(n*n)

  // Otra solucion
  for (let i = 0; i < haystack.length; i++) {
    // react-redux
    // react, eact- act-r ... redux
    // redux
    const sliced = haystack.slice(i, needle.length + i);
    if (sliced === needle) return i;
  }
  return -1;
}

console.log(FindNeedle("react-redux", "redux"));

module.exports = FindNeedle;