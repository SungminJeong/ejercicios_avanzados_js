const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2){
  const exIndex1 = array[index1];
  array[index1] = array[index2];
  array[index2] = exIndex1;
  console.log(array);
}

swap(fantasticFour, 1, 2);