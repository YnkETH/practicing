/* function curry(fn) {
  // Your code here:
  console.log(fn); // -> fn suma
  const args = [];
  return function PT11B(arg) {
    // args -> [args]
    args.push(arg);
    if (args.length === fn.length) {
      return fn(...args)
    } else {
      return PT11B
    }
    
  };
} */

// Solucion 2 gracias a Gonza

function curry(fn, ...args) {
  console.log(args);
  return (...curryArgs) => {
    console.log(curryArgs);
    return args.length + curryArgs.length >= fn.length
      ? fn(...args, ...curryArgs)
      : curry(fn, ...args, ...curryArgs);
  };
}

function suma(a, b, c, d, e, f, g, h) {
  return a + b + c + d + e + f + g + h;
}
console.log(suma.length);

const sumaCon = curry(suma);
// ?????? SumaCon -> Currificacion
const sumaConUno = sumaCon(1);
console.log(sumaConUno);
const sumaConTres = sumaConUno(3);
console.log(sumaConTres);
const sumaConSiete = sumaConTres(7);
console.log(sumaConSiete);
const sumaConDiez = sumaConSiete(10)(1)(3)(4)(5);
console.log(sumaConDiez);

module.exports = curry;