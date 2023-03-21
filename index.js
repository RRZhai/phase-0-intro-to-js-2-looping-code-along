// Code your solutions in this file
function writeCards(names, string){
    const newArray = [];
    for (let i = 0; i < names.length; i++){
      newArray.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
  }

  function countDown(){
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
  }