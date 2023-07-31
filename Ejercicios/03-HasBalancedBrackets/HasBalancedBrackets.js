function HasBalancedBrackets(string) {
  // Your code here:
  // Primera solucion
  /* console.log(string);
​
  const openBrackets = ["{", "[", "("];
  //                           1   ^
  const closeBrackets = ["}", "]", ")"];
  //                           1    ^
​
  const stack = []; 
  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    console.log(bracket);
​
    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
      console.log(stack)
    } else {
      // bracket -> ]
      console.log(bracket)
      const lastPushed = stack.at(-1)
      console.log(lastPushed)
      const indexOpen = openBrackets.indexOf(lastPushed)
      const bracketAux = closeBrackets[indexOpen]
      console.log(bracketAux)
      if (bracket === bracketAux) stack.pop()
      else {
        return false
      }
    }
  }
  if (stack.length === 0) return true
  return false */
  // Segunda solucion

  const validBrackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    console.log(bracket);
    if (validBrackets[bracket]) {
      stack.push(bracket);
    } else {
      console.log(bracket);
      const lastPushed = stack.at(-1);
      console.log(lastPushed);
      if (validBrackets[lastPushed] === bracket) stack.pop();
      else return false;
    }
  }
  if (stack.length === 0) return true;
}

console.log(HasBalancedBrackets("{[]()}"));
console.log(HasBalancedBrackets("{[(])}"));
console.log(HasBalancedBrackets(""));
module.exports = HasBalancedBrackets;