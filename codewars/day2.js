
// Name           : Find the Difference in Age between Oldest and Youngest Family Members
// Link practice  : https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
  let min = Math.min.apply(Math, ages)  // Membuat variable untuk menampung hasil nilai terbesar yang ada pada parameter ages
  let maks = Math.max.apply(Math, ages) // Membuat variable untuk menampung hasil nilai terkecil yang ada pada parameter ages
  let selisih = maks - min  // Melakukan operasi pengurangan pada nilai yang di tampung pada variable min dan maks
  return [min,maks,selisih] // memasukan nilai yang di tampung min, maks, dan selisih kedalam array
}


console.log(differenceInAges([1,10,11])) // fungsi differenceInAges di panggil dengan argumen array.