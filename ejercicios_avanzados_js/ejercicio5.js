function rollDice(caras){
  const randomNum = Math.random() * caras + 1;
  const result = Math.floor(randomNum)
  console.log(result)
}

rollDice(6);
rollDice(8);