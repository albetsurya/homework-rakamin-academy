
function generateRandomArray(length, min, max) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randomArray;
}


function splitArrayByIndex(arraynumber) {
  const evenNumbers = [];
  const oddNumbers = [];
  for (let i = 0; i < arraynumber.length; i++) {
    if (arraynumber[i] % 2 === 0) {
      evenNumbers.push(arraynumber[i]);
    } else {
      oddNumbers.push(arraynumber[i]);
    }
  }
  return { evenNumbers, oddNumbers };
}


function calculateStats(arraynumber) {
  let min = arraynumber[0];
  let max = arraynumber[0];
  let total = 0;
  for (let i = 0; i < arraynumber.length; i++) {
    if (arraynumber[i] < min) min = arraynumber[i];
    if (arraynumber[i] > max) max = arraynumber[i];
    total += arraynumber[i];
  }
  const average = total / arraynumber.length;
  return { min, max, total, average };
}


const randomArray = generateRandomArray(100, 1, 50);
const { evenNumbers, oddNumbers } = splitArrayByIndex(randomArray);

const evenStats = calculateStats(evenNumbers);
const oddStats = calculateStats(oddNumbers);

console.log('Array Genap:', evenNumbers);
console.log('Array Ganjil:', oddNumbers);
console.log('Statistik Genap:', evenStats);
console.log('Statistik Ganjil:', oddStats);


if (evenStats.min > oddStats.min) {
  console.log('Nilai minimal lebih besar pada Array Genap');
} else {
  console.log('Nilai minimal lebih besar pada Array Ganjil');
}

if (evenStats.max > oddStats.max) {
  console.log('Nilai maximal lebih besar pada Array Genap');
} else {
  console.log('Nilai maximal lebih besar pada Array Ganjil');
}

if (evenStats.total === oddStats.total) {
  console.log('Total memiliki nilai yang sama pada kedua array');
} else if (evenStats.total > oddStats.total) {
  console.log('Nilai total lebih besar pada Array Genap');
} else {
  console.log('Nilai total lebih besar pada Array Ganjil');
}

if (evenStats.average > oddStats.average) {
  console.log('Nilai rata-rata lebih besar pada Array Genap');
} else {
  console.log('Nilai rata-rata lebih besar pada Array Ganjil');
}
