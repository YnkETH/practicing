function spyOn(fn) {
  // Your code here:
  let count = 0;
  let called = {};
  let returned = {};
  function spy(...args) {
    for (const elem of args) {
      called[elem] = true;
    }
    count++;
    let result = fn(...args);
    returned[result] = true;
    return result;
  }
​
  spy.getCallCount = function () {
    return count;
  };
​
  spy.wasCalledWith = function (arg) {
    return called[arg] ?? false;
  };
  spy.returned = function (arg) {
    return returned[arg] ?? false;
  };
​
  return spy;
}
​
// Solucion 2 gracias a Gonza
​
function spyOn(fn) {
  //Your code here:
  const callArgs = [];
  const returnValues = [];
​
  function spy(...args) {
    callArgs.push(...args);
    const result = fn(...args);
    returnValues.push(result);
    return result;
  }
​
  spy.getCallCount = () => callArgs.length;
​
  spy.wasCalledWith = (val) => callArgs.some((elem) => elem === val);
​
  spy.returned = (val) => returnValues.includes(val);
​
  return spy;
}
​
// [1,2,3] -> ...[] -> 1,2,3 -> [...characters, character]
​
/* function adder(n1, n2) {
  return n1 + n2;
}
console.log(adder(2, 4));
​
const adderSpy = spyOn(adder);
​
console.log(adderSpy.returned(6));
console.log(adderSpy(2, 4));
console.log(adderSpy(1, 3));
console.log(adderSpy.getCallCount());
console.log(adderSpy.wasCalledWith(3)); */
​
module.exports = spyOn;