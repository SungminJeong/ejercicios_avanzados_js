function findArrayIndex(array, text) {
  //Tu codigo
  for(const character of array){
    if(character === text){
      console.log(`The position of ${text} is ${array.indexOf(text)}`);
      return array.indexOf(text)
    };
  };
/*
  array.forEach(character => {
    if(character === text){
      console.log(array.indexOf(text))
    }
  });
  */
};

function removeItem(character){
  const remove = findArrayIndex(mainCharacters, character);
  mainCharacters.splice(remove, 1);
  console.log(mainCharacters);
};

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

findArrayIndex(mainCharacters, "Rey")
removeItem("Rey")


