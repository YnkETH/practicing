function MaxValue(shares) {
  // Your code here:
  //Primera solucion
  // return Math.max(...shares) - Math.min(...shares);
  // o(n)

  // Segunda solucion
   let mayorGanancia = 0;
  // 4, 3, 2, 5, 11
  // i
  //   j

  
  for (let i = 0; i < shares.length - 1; i++) {
    for (let j = i + 1; j < shares.length; j++) {
      const ganancia = shares[j] - shares[i];
      if (ganancia > mayorGanancia) {
        mayorGanancia = ganancia;
      }
    }
  }
  return mayorGanancia; 
  // o(n^2)
}

console.log(MaxValue([4, 3, 2, 5, 11]));

module.exports = MaxValue;