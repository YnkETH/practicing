function intersection(arr1, arr2) {
  // Your code here:
  //* Solucion 1
  // O(n^2)
  // let arr = []
  // for (const elem1 of arr1) {
  //   console.log(elem1)
  //   for (const elem2 of arr2) {
  //     console.log(elem2)
  //     if(elem1 === elem2) arr.push(elem1)
  //   }
  // }
  // return arr
  //* Solucion 2
  // O(n^2)
  // let arr = []
  // for (const elem1 of arr1) {
  //   if (arr2.includes(elem1)) {
  //     arr.push(elem1)
  //   }
  // }
  // return arr
  //* Solucion 3
  // O(n^2)
  //return arr1.filter((elem1) => arr2.includes(elem1))
  //* Solucion 4
  // O(n)
  // let arr = []
  // let obj = {} -> "hashMap"
  // for (const elem1 of arr1) {
  //   obj[elem1] = true
  // }
  // for (const elem2 of arr2) {
  //   if(obj[elem2]) arr.push(elem2)
  // }
  // return arr
  //* Solucion 5
  // O(n)
  // let arr = [];
  // let arrayAsociativo = [];
  // for (const elem1 of arr1) {
  //   arrayAsociativo[elem1] = true;
  // }
  // for (const elem2 of arr2) {
  //   if (arrayAsociativo[elem2]) arr.push(elem2);
  // }
  // return arr;
  //* Solucion 6
  // O(n)
  // let arr = [];
  // let hashMap = new Map();
  // for (const elem1 of arr1) hashMap.set(elem1, true)
  // for (const elem2 of arr2) if (hashMap.get(elem2)) arr.push(elem2)
  // return arr
  //* Solucion 7
  // O(n)
  // [5,1,4,2,8]
  // [5] [] [4] [2] [8]
  //  ^  ^
  // [1,5] [2,4] [8]
  //    i     j
  // [1,2]
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < arr1.length && j < arr2.length) {
    // [1, 2, 5, 7, 10];
    //  i
    //
    // [2, 3, 6, 8, 10, 20];
    //  j
    const num1 = arr1[i];
    const num2 = arr2[j];
    if (num1 === num2) {
      arr.push(num1);
      i++;
      j++;
    } else num1 < num2 ? i++ : j++;
  }
  return arr;
}
​
const a1 = [1, 3, 5, 7, 10];
// [,true, , true, ,true]
const a2 = [2, 3, 6, 8, 10, 20];
// []
​
console.log(intersection(a1, a2));
​
module.exports = intersection;